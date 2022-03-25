import { client } from './auth';

export enum SearchIndexEnum {
  USER = 'user',
  TRANSACTION = 'transaction',
  ACCOUNT = 'account',
}

export async function syncToEs(doc: any, index: SearchIndexEnum): Promise<any> {
  // console.log('doc:', doc);
  const { id, ...body } = doc;

  try {
    const document: any = await client.index({
      index,
      id,
      body,
    });
    return document;
  } catch (err) { throw new Error(err); }
}