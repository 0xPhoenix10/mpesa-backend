import { flattenObject } from '../../helpers/flatten';
import XLSX from 'xlsx';

export const toExcel = async (data, path)=> {
  const userDetails =  [flattenObject(data.user)];

  const workSheet = XLSX.utils.json_to_sheet(data.transactions);
  const user =  XLSX.utils.json_to_sheet(userDetails);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, 'transaction');
  XLSX.utils.book_append_sheet(workBook, user, 'user');
  await XLSX.writeFile(workBook, path);
  // return XLSX.stream.set_readable(workBook);
};