import { getLabelsML } from './bulkProcessLabelsML';

const transactionList = [
  { description: 'mpesa transaction fuliza' },
  { description: 'mpesa fulizaa transaction' },
];

describe('get labels', () => {
  it('get labels from text', async () => {
    const getLabels = await getLabelsML(transactionList);
    expect(getLabels[0].labels.length > 0).toBeTruthy();
  });
});