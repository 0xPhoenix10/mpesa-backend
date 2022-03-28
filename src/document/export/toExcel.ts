import { flattenObject } from '../../helpers/flatten';
const XLSX = require('xlsx');

export const toExcel = async (data, path)=> {
  const transaction = data.transactions.map(item => {
    return { ...item.transaction };
  });

  const summaryDetails = [flattenObject(data.summary)];

  const userDetails =  [flattenObject(data.user)];


  const workSheet = XLSX.utils.json_to_sheet(transaction);
  const summary =  XLSX.utils.json_to_sheet(summaryDetails);
  const user =  XLSX.utils.json_to_sheet(userDetails);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, 'transaction');
  XLSX.utils.book_append_sheet(workBook, summary, 'summary');
  XLSX.utils.book_append_sheet(workBook, user, 'user');
  await XLSX.writeFile(workBook, path);
};