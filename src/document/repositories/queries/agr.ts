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

export const generalAggsLast3Months = (startDate, endDate) => {
  return {
    'size': 0,
    'aggs': {   
      'name': {
        'terms': {
          'field': 'name.keyword',
          'size': 1,
        },
      },
      'phoneNumbers': {
        'terms': {
          'field': 'mpesaPhoneNumberSecret.keyword',
          'size': 10,
          
        },
      },
      'day': {
        'date_histogram': {
          'field': 'createdAt',
          'calendar_interval': 'day',
        },
        'aggs': {
          'sumInOut': {
            'sum': {
              'field': 'amount',
            },
          },
        },
      },
    },
    'query': {
      'bool': {
        'must': [],
        'filter': [
          {
            'range': {
              'createdAt': {
                'format': 'strict_date_optional_time',
                'gte': '2022-01-01T12:16:01.554Z',
                'lte': '2022-02-27T12:16:01.554Z',
              },
            },
          },
        ],
        'should': [],
        'must_not': [],
      },
    },
  };
  
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
      'day': {
        'date_histogram': {
          'field': 'createdAt',
          'calendar_interval': 'day',
        },
        'aggs': {
          'sumInOut': {
            'sum': {
              'field': 'amount',
            },
          },
        },
      },
      'week': {
        'date_histogram': {
          'field': 'createdAt',
          'calendar_interval': 'week',
        },
        'aggs': {
          'sumInOut': {
            'sum': {
              'field': 'amount',
            },
          },
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
      'average_transactions_amount_per_day_last_3_months': {
        'avg_bucket': {
          'buckets_path': 'day>sumInOut',
          'gap_policy': 'skip',
          'format': '#,##0.00;(#,##0.00)',
        },
      },
    },
  };
};