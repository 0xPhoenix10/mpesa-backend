import { flattenObject } from '../../helpers/flatten';
import { neo } from '../neo/auth';

export const transactionNeo = {
  async findOrCreateAccount(account) {
    const query = `
    MERGE (a:account { mpesaPaybill: '${account.values.mpesaPaybill}'})
    ON MATCH
      SET a = $props
    ON CREATE
      SET a = $props
    RETURN a
   `;
    const created = await neo.query(query, { props: flattenObject(account.values) });
  },

  async createTransaction(transaction, nodeFrom, nodeTo) {

    //
    // check if transactions exists
    // 

    const transactionExists = `
      MATCH r = ()-[n:transaction {mpesaTransactionId: "${transaction.mpesaTransactionId}"}]-()
      RETURN r
    `;
    
    const exists = await neo.query(transactionExists);
    if (exists.length === 0) {
      const query = `
          MERGE (u1:${nodeFrom.label} {${nodeFrom.selector}: "${nodeFrom.values[nodeFrom.selector]}"})
          ON CREATE
            SET u1 = $nodeFrom

          MERGE (u2:${nodeTo.label} {${nodeTo.selector}: "${nodeTo.values[nodeTo.selector]}"})
          ON CREATE
            SET u2 = $nodeTo

          
          CREATE (u1)-[t:transaction $transaction]->(u2)
          
          RETURN u1, u2, t
    `;
  
      const created = await neo.query(query, { transaction, nodeTo: nodeTo.values, nodeFrom: nodeFrom.values });
    }

 
  },
};