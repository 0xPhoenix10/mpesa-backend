import { rawDocData } from '../tests/mocks/docToDataTest';
import { LabelService } from './getLabels.service';

// jest.mock("")

describe('marge labels into data', () => {
  const doc = new LabelService();
  it('get labels', async () => {
    const getLabels = await doc.run(rawDocData.transactions);
    console.log('getLabels:', getLabels);
  });

  // it('process status check', async () => {
  //   const getStatus = await doc.processStatusCheck('5b6996f6-336d-48d0-8bdc-f3c2a3e42354');
  //   console.log('getStatus:', getStatus);
  // });

  it('export data', () => {
    
  });
});