import axios from 'axios';

export const getLabelsML = async (transactions) => {
  
  const onlyDescriptions = transactions.map(item => item.description);

  const { data: { result } } = await axios({
    method: 'post',
    url: 'https://labels.sevi.io/api',
    data: {
      texts: onlyDescriptions,
      token: 'fegj3498543u2489uefilsdjfds98sg98',
    },
  });
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
};