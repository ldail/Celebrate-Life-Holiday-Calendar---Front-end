export const VIEWS = {
  MONTH: 'MONTH',
  DAY: 'DAY'
}



//DEV USE:


export const FAKE__EVENTS = {
  1: {
    name: 'Christmas',
    month: 12,
    day: 25,
    countries: ['USA', 'UK', 'BEL', 'CAN', 'MEX'],
    major: true
  },
  2: {
    name: 'New Years Eve',
    month: 12,
    day: 31,
    countries: ['USA', 'UK', 'BEL', 'CAN', 'MEX'],
    major: true
  },
  3: {
    name: 'New Years',
    month: 1,
    day: 1,
    countries: ['USA', 'UK', 'BEL', 'CAN', 'MEX'],
    major: true
  },
  4: {
    name: 'Independence Day',
    month: 7,
    day: 4,
    countries: ['USA'],
    major: true
  },
  5: {
    name: `Int'l Ice Cream Day`,
    month: 7,
    day: 18,
    countries: ['USA', 'CAN', 'SK']
  },
  6: {
    name: 'Celebration of Life Day',
    month: 7,
    day: 25,
    countries: ['USA']
  },
  7: {
    name: 'FakeADay',
    month: 7, 
    day: 25,
    countries: ['JP', 'BEL'],
    major: true
  },
  8: {
    name: 'SeedHoliday Yay',
    month: 7, 
    day: 14,
    countries: ['SK']
  },
  9: {
    name: 'Augustus Day',
    month: 8,
    day: 3,
    countries: ['BEL', 'CAN']
  }
}

export const FAKE__EVENT_DATES = {
    2020: {
      JAN: {
        1: [3]
      },
      JUL: {
        4: [4],
        14: [8],
        18: [5],
        25: [6, 7]
      },
      AUG: {
        3: [9]
      },
      DEC: {
        25: [1],
        31: [2]
      }
    }
}