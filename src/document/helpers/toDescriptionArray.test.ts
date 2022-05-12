import { rawDocData } from '../tests/mocks/docToDataTest';
import { transactionToDescriptionArray } from './toDescriptionArray';

describe('transactions to description array', () => {
  it('parse', ()  => {
    const descriptionArray = transactionToDescriptionArray.cleanArray(rawDocData.transactions);
    console.log('descriptionArray:', descriptionArray);
  });
});