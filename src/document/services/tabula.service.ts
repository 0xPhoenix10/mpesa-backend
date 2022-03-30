import { Tabula } from 'src/helpers/tabula';
import { differenceInDays } from 'date-fns';
import parsePhoneNumber from 'libphonenumber-js';
import { CurrencyEnum, TransactionMethodEnum } from '@prisma/client';
import { DescriptionDeconstructionUser } from '../type/transactionDescriptionDeconstruction';
import { textToLabels } from '../../textToLabel/textInput';
import { NodeLabel } from '../type/nodeLabel.enum';

const knownSummaryItems = [
  { field: 'SEND MONEY:', name: 'sendMoney' },
  { field: 'RECEIVED MONEY:', name: 'recieveMoney' },
  { field: 'AGENT DEPOSIT:', name: 'AgentDeposit' },
  { field: 'AGENT WITHDRAWAL:', name: 'AgentWithdrawalt' },
  { field: 'LIPA NA M-PESA (BUY GOODS):', name: 'goods' },
  { field: 'OTHERS:', name: 'other' },
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



export const getDataFromPDF = async (file: string, password: string, pages: '1' | '2' | 'all') => {
  const tableData = await Tabula(file, password, pages);
  if (!tableData) throw new Error('can not get the table data');
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
          label: NodeLabel.USER,
          value: (item): DescriptionDeconstructionUser => {
            return textToLabels(item, NodeLabel.USER);
          },
        },
        {
          field: 'Customer Transfer to',
          name: 'to',
          label: NodeLabel.USER,
          value: (item): DescriptionDeconstructionUser =>  {
            return textToLabels(item, NodeLabel.USER);
          },
        },
        {
          field: 'Customer Payment to',
          name: 'to',
          label: NodeLabel.USER,
          value: (item) : DescriptionDeconstructionUser => {
            return textToLabels(item, NodeLabel.USER);
          },
        },
        {
          field: 'Business Payment from',
          name: 'from',
          label: NodeLabel.ACCOUNT,
          value: (item) : DescriptionDeconstructionUser => {
            return textToLabels(item, NodeLabel.ACCOUNT);
          },
        },
        {
          field: 'Merchant Payment Online to',
          name: 'to',
          label: NodeLabel.ACCOUNT,
          value: (item) => {
            return textToLabels(item, NodeLabel.ACCOUNT );
          },

        },
      ];
 

      //
      // transactions details
      // 
      if (textFirstItem.length === 10) {

        const transactionsDetails = row[2]?.text.replaceAll('\r', ' ').replace(/ +(?= )/g, '');

        let node = null;
        transactionsTypes.forEach(item => {
          if (transactionsDetails.includes(item.field)) {
            node = { direction: item.name, values: item.value(transactionsDetails), label: item.label };
          } 
        });

        const amountIn = row[4]?.text ? parseFloat(row[4]?.text.replaceAll(',', '')) : null;
        const  amountOut = row[5]?.text ? Math.abs(parseFloat(row[5]?.text.replaceAll(',', ''))) : null;
        const amount = amountIn || amountOut;
        
        const get = { 
          transaction: {
            mpesaTransactionId: row[0]?.text,
            createdAt: new Date(row[1]?.text).toString(),
            description: transactionsDetails,
            status: row[3]?.text,
            in: amountIn,
            out: amountOut,
            currency: CurrencyEnum.KES,
            method: TransactionMethodEnum.MPESA,
            amount: amount,
            balanceAfter: row[6]?.text ? parseFloat(row[6]?.text.replaceAll(',', '')) : null,
          }, 
          node,
        };
        transactions.push(get);
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

  return { user, summary, transactions };
};

