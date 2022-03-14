import { document } from '../../repositories/document.db';

export const  MpesaTransactions = async  (userOrigin, transactions) => {
  console.log('userOrigin:', userOrigin);

  for (const transaction of transactions) {
    if (transaction.transactionLinkItem) {
      if (transaction.transactionLinkItem) {
        // User Transactions
        if (transaction.transactionLinkItem.values.transactionType === 'USER') {
          const { direction, values: { fullName, phoneNumber } } =  transaction.transactionLinkItem;
          console.log('direction:', direction);
          const linkUser = await document.findOrCreateFrom({ name: fullName, phoneNumber: phoneNumber });
          console.log('linkUser:', linkUser);

          delete transaction.transactionLinkItem;
          if (direction === 'to') {
            // console.log('direction:', direction);
          
            const transactionEdge = {
              _to: linkUser._id,
              _from: userOrigin._id,
              ...transaction,
            };

            document.createTransaction(transactionEdge);
            
            // console.log('transactionEdge:', transactionEdge);
          }

          if (direction === 'from') {
            const transactionEdge = {
              _to: userOrigin._id,
              _from: linkUser._id,
              ...transaction,
            };
            document.createTransaction(transactionEdge);
          }
        } else {
          //
          //  handle unknown transactions
          //


          // const transactionEdge = {
          //   _to: linkUser._id,
          //   _from: userOrigin._id,
          //   ...transaction,
          // };
          // document.createTransaction(transactionEdge);
        }
      }



      // add transaction details


      // console.log('transactionEdge:', transactionEdge);
      // document.createTransaction(transactionEdge)
    }
  }
};