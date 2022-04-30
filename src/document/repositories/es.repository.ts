import { Client } from '@elastic/elasticsearch';
// import { flatten } from '@nestjs/common';
import { parse } from 'url';
import { flattenObject } from '../../helpers/flatten';
const fs = require('fs');

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


const ESclient = new Client({ node: url });

export const elastic = {
  async syncToEs(doc: any, index: any) {
    const { id, ...body } = doc;
    ESclient.index({
      index,
      id,
      body,
    });
  },

  async mpesaTransactions(docs: any, index: any) {
    const user = await ESclient.index({
      index: 'user',
      body: { ...docs.user, mpesaStatementSummary: docs.summary },
    });
    
    const list = [];
    await docs.transactions.map(item => {
      const node = flattenObject(item.node?.values);
      list.push(
        { create: { _index:  index, _id: `${item.transaction.mpesaTransactionId}-${item.transaction.description}` } }, 
        { ...item.transaction, ...node, user: user._id  });
    });
    await ESclient.bulk({
      body: list,
    });

    return user;
  },

  async query(query: any, index: any) {
    const user = await ESclient.search({
      index,
      body: query,
    });
    return user;
  },

  async doc(id:any, index:any){
    return ESclient.get({
      index,
      id,
    });
  },
  
};
