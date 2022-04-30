import { AccountReprository } from '../../../account/account.db';
import { TransactionReprository } from '../../../transaction/transaction.db';
import { transactionNeo } from '../../../transaction/transaction.neo';
import { userNeoDocuments } from '../../../user/user.neo';
import { NodeLabel } from '../../type/nodeLabel.enum';
// import { nodeLabels } from '../../type/nodeLabel.enum';

export const  MpesaTransactions = async  (userOrigin, items) => {

  for (const item of items) {
    if (item.node) {
      const { direction } =  item.node;
      // User Transactions
      if (item.node?.label === NodeLabel.USER) {
        
        if (direction === 'to') {
          // create edge and node
          await transactionNeo.createTransaction(
            item.transaction, 
            { ...userOrigin, selector: 'phoneNumber' }, 
            { ...item.node, selector:'phoneNumber' },
          );
        }

        if (direction === 'from') {
          await transactionNeo.createTransaction(
            item.transaction, 
            { ...item.node, selector:'phoneNumber' },
            { ...userOrigin, selector: 'phoneNumber' },
          );
        }

      } else if (item.node?.label === NodeLabel.ACCOUNT) { 
          
        if (direction === 'to') {
          await transactionNeo.createTransaction(
            item.transaction, 
            { ...userOrigin, selector: 'phoneNumber' },
            { ...item.node, selector:'mpesaPaybill' },
          );
        }

        if (direction === 'from') {
          await transactionNeo.createTransaction(
            item.transaction, 
            { ...item.node, selector:'mpesaPaybill' },
            { ...userOrigin, selector: 'phoneNumber' },
          );
        }

      } else {
        
        // just add to unknown account and user endpoint to capture
      }
      //
      //  handle unknown transactions
      //

    }

  }
};