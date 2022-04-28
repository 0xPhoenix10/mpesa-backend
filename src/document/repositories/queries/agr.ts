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

const aggDailyAvg = (field, returnField) => {
  const sumReturnField = `sum${returnField}`;
  const avgReturnField = `avg${returnField}`;

  return {
    [sumReturnField]: {
      date_histogram: {
        calendar_interval: 'day',
        min_doc_count: 0,
        field: 'createdAt'
      },
      aggs: {
        daySum: {
          sum: {
            field
          }
        },
      }
    },
    [avgReturnField]: {
      // tag::avg-bucket-agg-syntax[]
      "avg_bucket": {
        "buckets_path": `${sumReturnField}>daySum`,
        "gap_policy": "skip",
      },
      // end::avg-bucket-agg-syntax[]
    }
  }
}

export const avgFilterByDate = (start, end) => {
  return {
    filter: {
      range: {
        'createdAt': {
          gte: start,
          lte: end
        }
      }
    },
    aggs: {
      ...aggDailyAvg('in', 'DailyIn'),
      ...aggDailyAvg('out', 'DailyOut'),
    }
  }
}

export const avgFromRange = (userId: string, start: string, end: string) => {
  return {
    size: 0,
    query: {
      match: {
        user: userId,
      }
    },
    ...avgFilterByDate(start, end),
  }
}

export const avg3month = (userId: string) => {
  return {
    size: 0,
    query: {
      match: {
        user: userId,
      }
    },
    aggs: {
      avgDaily: avgFilterByDate('now-3M', 'now'),
      avgPositiveBalance: {
        filter: {
          range: {
            balanceAfter: {
              gt: 0
            }
          }
        },
        aggs: {
          avgPositive: {
            avg: {
              field: 'balanceAfter'
            }
          }
        }
      },
      totalIn: {
        sum: {
          field: 'in'
        }
      },
      totalOut: {
        filter: {
          match: {
            description: 'loan'
          }
        },
        aggs: {
          total: {
            sum: {
              field: 'out'
            }
          }
        }
      },
    },
  }
}

export const personalTransactionCountLast30days = (userId, phone) => {
  console.log(userId, phone);
  return {
    query: {
      bool: {
        must: [
          {
            match: {
              description: phone
            }
          },
          {
            match: {
              user: userId
            }
          },
        ],
        filter: {
          range: {
            in: {
                gt: 0
              }
            }
        }
      }
    }
  }
}

export const totalCash = (userId) => {
  return {
    query: {
      bool: {
        must: {
          match: {
            userId
          }
        },
        must_not: {
          match: {
            description: 'OverDraft of Credit Party'
          },
        }
      },
      // aggs: {
      //   total: {
      //     sum: {
      //       field: 'in'
      //     }
      //   }
      // }
    }
  }
}

export const searchTransactionByDescription = (userId: string, searchText: string) => {
  console.log(userId, searchText);
  return {
    query: {
      bool: {
        must: [
          {
            match: {
              description: searchText
            }
          },
          {
            match: {
              user: userId
            }
          }
        ]
      }
    }
  }
}

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
    'query': {
      'match': {
        'id': userId
      }
    },
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