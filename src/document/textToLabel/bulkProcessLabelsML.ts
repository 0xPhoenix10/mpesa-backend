import axios from 'axios';

export const getLabelsML = async (transactions) => {
  try {
    // console.log('transactions:', transactions);
  
    const onlyDescriptions = transactions.map(item => item.transaction.description);
    console.log('onlyDescriptions:', onlyDescriptions);

    const { data: { result } } = await axios({
      method: 'post',
      url: 'https://labels.sevi.io/api',
      data: {
        texts: onlyDescriptions,
        token: 'fegj3498543u2489uefilsdjfds98sg98',
      },
    });

    console.log('result:', result);
    const onlyRequiredFields = result.map(item => {
      return item.entities.map(entity => {
        return { label: entity.label_, value: entity.text };
      });
    });

    const merged = transactions.map((item, index) => {
      item.labels = onlyRequiredFields[index];
      return item;
    });
  
    return merged;
  } catch (err) {
    throw new Error(err);
  }
};