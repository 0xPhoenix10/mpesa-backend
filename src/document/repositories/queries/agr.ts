export const top10 = () => {
  return {
    'size': 0, 
    'aggs': {
      'name': {
        'terms': {
          'field': 'name.keyword',
          'size': 10,
        },
      },
      'phoneNumbers' : {
        'terms' : {
          'field' : 'mpesaPhoneNumberSecret.keyword',
          'size': 10,
        },
      },
    },
  };
}; 

export const allDocs = (userId) => {
  return { size: 100 };
};

export const generalAggs = (userId) => {
  return  {
    'size': 0,
    'aggs': {
      'name': {
        'terms': {
          'field': 'name.keyword',
          'size': 10,
        },
      },
      'phoneNumbers': {
        'terms': {
          'field': 'mpesaPhoneNumberSecret.keyword',
          'size': 10,
        },
      },
      'week': {
        'date_histogram': {
          'field': 'createdAt',
          'calendar_interval': 'week',
        },
        'aggs': {
          'max incomming payment amount per week': {
            'max': {
              'field': 'in',
            },
          },
          'max outgoing payment amount per week': {
            'max': {
              'field': 'out',
            },
          },
          'In amount per week': {
            'sum': {
              'field': 'in',
            },
          },
          'Out amount per week': {
            'sum': {
              'field': 'out',
            },
          },
        },
      },
    },
  };
};