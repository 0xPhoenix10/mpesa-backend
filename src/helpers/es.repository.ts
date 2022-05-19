import { Client } from '@elastic/elasticsearch';
// import { flatten } from '@nestjs/common';
import { parse } from 'url';
// import { flattenObject } from './flatten';
// const fs = require('fs');

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
console.log('url:', url);
const ESclient = new Client({ node: url });

export const elasticSearch = {
  async syncToEs(doc: any, index: any) {
    const { id, ...body } = doc;
    ESclient.index({
      index,
      id,
      body,
    });
  },

  async user(docs: any) {
    try {
      const user = await ESclient.index({
        index: 'user',
        body: { ...docs.user, mpesaStatementSummary: docs.summary },
      });
      return user;
    } catch (err){
      console.log('err:', err);
      throw new Error(err);
    }
  },

  async mpesaTransactions(transactions: any, index: any, userId: any) {
    const list = [];
    await transactions.map((item, arrayIndexNumber) => {
      list.push(
        { create: { _index:  index, _id: `${item.mpesaTransactionId}-${item.description}` } }, 
        { ...item, userId, arrayIndexNumber });
    });
    // console.log('list:', list);
    await ESclient.bulk({
      body: list,
    });
    
    return list;
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
