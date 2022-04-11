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
          'incomming': {
            'max': {
              'field': 'in',
            },
          },
          'outgoing': {
            'max': {
              'field': 'out',
            },
          },
          'sumIn': {
            'sum': {
              'field': 'in',
            },
          },
          'sumOut': {
            'sum': {
              'field': 'out',
            },
          },
        },
      },
    },
  };
};