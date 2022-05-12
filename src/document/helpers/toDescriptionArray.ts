export const transactionToDescriptionArray = {
  // console.log('transactions:', transactions);
  cleanArray(transactions)  {
    const array = transactions.map((transaction) => {
      // console.log('transaction:', transaction);
      return transaction.description;
    });
    return array;
  },

};