import { Tabula } from 'src/helpers/lib/tabula';
// import differenceInDays from 'date-fns/differenceInDays'
import { differenceInDays } from 'date-fns';
import parsePhoneNumber from 'libphonenumber-js';
import { findPhoneNumbersInText } from 'libphonenumber-js';
import { TransactionType } from '../type/transaction.type';
import { CurrencyEnum, TransactionMethodEnum } from '@prisma/client';

const knownSummaryItems = [
  { field: 'SEND MONEY:', name: 'sendMoneyIn' },
  { field: 'RECEIVED MONEY:', name: 'recieveMoneyIn' },
  { field: 'AGENT DEPOSIT:', name: 'AgentDepositIn' },
  { field: 'AGENT WITHDRAWAL:', name: 'AgentWithdrawalOut' },
  { field: 'LIPA NA M-PESA (BUY GOODS):', name: 'goodsOut' },
  { field: 'OTHERS:', name: 'otherOut' },
  { field: 'TOTAL:', name: 'totalTransactions' },
];

const text = (field, item) => {
  const firstText = item[0].text;
  const cleanText = firstText.replace(field, '').trim();
  if (cleanText.length >= 5) {
    return cleanText;
  } else {
    return item[1].text;
  }
};

const knownUserItems = [
  {
    field: 'Customer Name', name: 'name', value(item) {
      const t = text(this.field, item);
      return t;
    },
  },
  {
    field: 'Mobile Number', name: 'phoneNumber', value(item) {
      const t = text(this.field, item);
      const phoneNumber = parsePhoneNumber(t, 'KE');
      // to Kenya international number
      return phoneNumber.number;
    },
  },
  {
    field: 'Email Address', name: 'email', value(item) {
      const t = text(this.field, item);
      return t;
    },
  },
  {
    field: 'Date of Statement', name: 'requestDate', value(item) {
      const textFirstItem = item[0].text;
      const date = new Date(textFirstItem.replace('Date of Statement', ''));
      return date;

    },
  },
  {
    field: 'Statement Period',
    name: 'period',
    value(item) {
      const t = text(this.field, item);
      const rangeSplit = t.split('-');
      const startDate = new Date(rangeSplit[0]);
      const endDate = new Date(rangeSplit[1]);
      const differenceInDay = Math.abs(differenceInDays(startDate, endDate));
      const range = { startDate, endDate, differenceInDay };
      return range;
    },
  },
  {
    field: 'Request Date', name: 'requestDate', value(item) {
      const t = new Date(text(this.field, item));
      return t;
    },
  },
];

function formatHiddenPhoneNumber(item) {
  const deconstruct = item.split('-')[1].trim().replaceAll('\'', '');
  const split = deconstruct.split(' ');
  const [phoneNumberSecret, ...name] = split;
  const fullName = name.join(' ');
  const firstName = name[0];
  const lastName = name.slice(1).join(' ');
  return { firstName, lastName, fullName, phoneNumberSecret };
}

function foundPhoneNumber(phoneNumber, item) {
  const deconstruct = item.replaceAll(phoneNumber.replace('+', ''), '').split('-');
  const [text, ...name] = deconstruct;
  const fullName = name.join(' ');
  const [firstName, ...lastName] = name[0].trim().split(' ');
  return { firstName, lastName: lastName.join(' '), fullName: fullName.trim(), phoneNumber };
}


export const getDataFromPDF = async (file: string, password: string, pages: '1' | 'all') => {
  const tableData = await Tabula(file, password, pages);

  const transactions = [];
  const summary = {};
  const user = { documentId: password };
  for (const page of tableData.table) {
    for (const row of page.data) {
      const textFirstItem = row[0]?.text;

      //
      // summary
      //
      knownSummaryItems.forEach(item => {

        if (textFirstItem === item.field) {
          summary[item.name] = {
            in: row[1]?.text ? parseFloat(row[1]?.text.replaceAll(',', '')) : null,
            out: row[2]?.text ? parseFloat(row[2]?.text.replaceAll(',', '')) : null,
          };
        }
      });

      const transactionsTypes = [
        {
          field: 'Funds received from',
          name: 'from',
          value: (item) => {
            const findPhone = findPhoneNumbersInText(item, 'KE');
            if (findPhone[0]?.number?.number) {
              return { ...foundPhoneNumber(findPhone[0]?.number?.number, item), transactionType: TransactionType.USER };
            }
            if (item.includes('******')) {
              return { ...formatHiddenPhoneNumber(item), transactionType: TransactionType.USER };
            }
          },
        },
        {
          field: 'Customer Transfer to',
          name: 'to',
          value: (item) => {
            const findPhone = findPhoneNumbersInText(item, 'KE');
            if (findPhone[0]?.number?.number) {
              return { ...foundPhoneNumber(findPhone[0]?.number?.number, item), transactionType: TransactionType.USER };
            }

            if (item.includes('******')) {
              return { ...formatHiddenPhoneNumber(item), transactionType: TransactionType.USER };
            }
          },
        },
        {
          field: 'Customer Payment to',
          name: 'to',
          value: (item) => {
            const findPhone = findPhoneNumbersInText(item, 'KE');
            if (findPhone[0]?.number?.number) {
              return { ...foundPhoneNumber(findPhone[0]?.number?.number, item), transactionType: TransactionType.USER };
            }
          },
        },

      ];

      //
      // transactions details
      // 
      if (textFirstItem.length === 10) {

        const transactionsDetails = row[2]?.text.replaceAll('\r', ' ').replace(/ +(?= )/g, '');

        let transactionLinkItem = null;
        transactionsTypes.forEach(item => {
          if (transactionsDetails.includes(item.field)) {
            transactionLinkItem = { direction: item.name, values: item.value(transactionsDetails) };
          }
        });


        const amountIn = row[4]?.text ? parseFloat(row[4]?.text.replaceAll(',', '')) : null;
        const  amountOut = row[5]?.text ? Math.abs(parseFloat(row[5]?.text.replaceAll(',', ''))) : null;
        const amount = amountIn || amountOut;

        transactions.push({
          transactionId: row[0]?.text,
          createdAt: new Date(row[1]?.text),
          description: transactionsDetails,
          transactionLinkItem,
          status: row[3]?.text,
          in: amountIn,
          out: amountOut,
          currency: CurrencyEnum.KES,
          method: TransactionMethodEnum.MPESA,
          amount: amount,
          balanceAfter: row[6]?.text ? parseFloat(row[6]?.text.replaceAll(',', '')) : null,
        });
      }

    }

  }



  //
  // Personal data
  //
  for (const firstPage of tableData.raw[0].data) {
    const foundText = firstPage[0].text;

    if (!foundText) continue;

    knownUserItems.forEach(item => {
      if (foundText.startsWith(item.field)) {
        user[item.name] = item.value(firstPage);
      }
    });

  }


  // 
  // stats
  //

  return { user, summary, transactions };
};

