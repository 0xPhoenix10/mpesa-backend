import { aql } from 'arangojs';
import { db } from 'src/partners/authArango';

export const TransactionReprository = { 

  // Steps to incert transactions
  // 1) check if transaction exists based on Transaction ID
  // 2) if transaction exist update phonenumber to existing phonenumber
  // 3) if transaction does not exist add transaction to db
  
  async createTransaction(transaction) {
    await db.collection('transaction');
    try {
      const create = await db.query(
        aql`
        UPSERT  { transactionId: ${transaction.transactionId}  }
        INSERT ${transaction} 
        UPDATE {}
        INTO transaction
        RETURN NEW
          `,
      );

      const [newTransaction] = await create.all();
    } catch (err) {
      throw new Error(err);
    }
  },
};