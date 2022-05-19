import { findPhoneNumbersInText } from 'libphonenumber-js';
import { NodeLabel } from '../types/nodeLabel.enum';
import { DescriptionDeconstructionAccount, DescriptionDeconstructionUser } from '../types/transactionDescriptionDeconstruction';

function formatHiddenPhoneNumber(item) {
  const deconstruct = item.split('-')[1].trim().replaceAll('\'', '');
  const split = deconstruct.split(' ');
  const [phoneNumberSecret, ...fullName] = split;
  const name = fullName.join(' ');
  const [firstName, ...lastName] = fullName;
  return { firstName, lastName: lastName.join(' '), name, mpesa: { phoneNumberSecret } };
}

function foundPhoneNumber(phoneNumber, item) {
  const deconstruct = item.replaceAll(phoneNumber.replace('+', ''), '').split('-');
  const [text, ...name] = deconstruct;
  const fullName = name.join(' ');
  const [firstName, ...lastName] = name[0].trim().split(' ');
  return { firstName, lastName: lastName.join(' '), name: fullName.trim(), phoneNumber };
}

export const textToLabels = (text, label) : DescriptionDeconstructionUser | DescriptionDeconstructionAccount => {
  if (label === NodeLabel.USER) {
    const findPhone = findPhoneNumbersInText(text, 'KE');
    if (findPhone[0]?.number?.number) {
      return { ...foundPhoneNumber(findPhone[0]?.number?.number, text), label };
    }
    if (text.includes('******')) {
      return { ...formatHiddenPhoneNumber(text), label: label };
    }
  }

  if (label === NodeLabel.ACCOUNT) { 
    const transactionDetails: DescriptionDeconstructionAccount = {
      name: null,
      mpesaTill: null,
      mpesaPaybill: null,
    };
    
    const [businessNumber, businessDescription] = text.split('-');
    const paybill = businessNumber.trim().split(' ').pop();
    const [name, rest] = businessDescription.split('via');
    transactionDetails.mpesaPaybill = paybill;
    transactionDetails.name = name.trim();
    return transactionDetails;

    // if (tillOrPaybill.length === 6) {
    //   transactionDetails.tillNumber = tillOrPaybill;
    // } 


    // const findPhone = findPhoneNumbersInText(item, 'KE');
    // if (findPhone[0]?.number?.number) {
    //   return { ...foundPhoneNumber(findPhone[0]?.number?.number, item), transactionType: TransactionType.USER };
    // }
  }



};