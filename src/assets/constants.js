export const VIEWS = {
  MONTH: 'MONTH',
  DAY: 'DAY',
  EVENT: 'EVENT'
}



//DEV USE:


export const FAKE__EVENTS = {
  1: {
    name: 'Christmas',
    month: 12,
    day: 25,
    countries: ['USA', 'UK', 'BEL', 'CAN', 'MEX'],
    major: true,
    recur: 'Recurrs Annually',
    description: 'The magical Christmas holiday celebrated all over the world!',
    pictures: [
      'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY5MDk1ODMyOTUwNTQ4MzYy/american-christmas-traditions-gettyimages-487756624.jpg',
      'https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY4ODE4ODA4MzY1MDAwNDY1/christmas-gettyimages-184652817.jpg',
      'https://static.officeholidays.com/images/1280x853c/christmas.jpg',
      'https://specials-images.forbesimg.com/imageserve/5e00d95b4e2917000783c1f2/960x0.jpg?fit=scale'
    ],
    resources: [
      'christmas.com',
      'jesuschrist.com'
    ],
    comments: [
      {
        author: 'r4ndy4110',
        date: [2020, 7, 15],
        comment: 'Best, favorite holiday!!!! There is no other like it!'
      },
      {
        author: 'jenkins_00',
        date: [2020, 7, 8],
        comment: `Can’t think of any other holiday I’d rather celebrate on a September 19 than this amazing holiday. Did you know it was invented by a real pirate?? Back in the 1500s. Wild huh?` 
      }
    ]
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
    major: true,
    recur: 'Recurrs Annually',
    description: 'The magical Christmas holiday celebrated all over the world!',
    pictures: [
      'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY5MDk1ODMyOTUwNTQ4MzYy/american-christmas-traditions-gettyimages-487756624.jpg',
      'https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY4ODE4ODA4MzY1MDAwNDY1/christmas-gettyimages-184652817.jpg',
      'https://static.officeholidays.com/images/1280x853c/christmas.jpg',
      'https://specials-images.forbesimg.com/imageserve/5e00d95b4e2917000783c1f2/960x0.jpg?fit=scale'
    ],
    resources: [
      'christmas.com',
      'jesuschrist.com'
    ],
    comments: [
      {
        author: 'r4ndy4110',
        date: [2020, 7, 15],
        comment: 'Best, favorite holiday!!!! There is no other like it!'
      },
      {
        author: 'jenkins_00',
        date: [2020, 7, 8],
        comment: `Can’t think of any other holiday I’d rather celebrate on a September 19 than this amazing holiday. Did you know it was invented by a real pirate?? Back in the 1500s. Wild huh?` 
      }
    ]
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