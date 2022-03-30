import { Client } from '@elastic/elasticsearch';
import { parse } from 'url';
// import { SearchIndexEnum } from './enums/search-index.enum';

const username = process.env.ELASTIC_USERNAME;
const password = process.env.ELASTIC_PASSWORD;
const publicURL = parse(process.env.ELASTIC_URL);
const developmentURL = process.env.ELASTIC_URL;

let url = null;
if (process.env.NODE_ENV === 'development') url = developmentURL;
if (process.env.NODE_ENV === 'production') {
  url = `${publicURL.protocol}//${username}:${password}@${publicURL.host}${publicURL.path}`;
}
process.env.ELASTIC_URL = url;

const ESclient = new Client({ node: url });

export const syncToEs = async (doc: any, index: any): Promise<any> => {
  const { id, ...body } = doc;
  ESclient.index({
    index,
    id,
    body,
  });
};