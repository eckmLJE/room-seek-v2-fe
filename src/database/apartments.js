export const apartments = [
  {
    id: 1,
    pet: true,
    bedrooms: [
      {
        name: "a",
        rent: 900,
        start: "2017-10-01",
        term: 12
      },
      {
        name: "b",
        rent: 1000,
        start: "2017-10-01",
        term: 6
      },
      {
        name: "c",
        rent: 1000,
        start: "2017-08-01",
        term: 12
      },
      {
        name: "d",
        rent: 1100,
        start: "2018-07-01",
        term: 6
      },
      {
        name: "e",
        rent: 1100,
        start: "2017-07-01",
        term: 12
      }
    ]
  },
  {
    id: 2,
    pet: false,
    bedrooms: [
      {
        name: "a",
        rent: 1000,
        start: "2018-09-01",
        term: 12
      },
      {
        name: "b",
        rent: 1100,
        start: "2018-02-01",
        term: 9
      },
      {
        name: "c",
        rent: 1100,
        start: "2017-10-01",
        term: 12
      },
      {
        name: "d",
        rent: 1200,
        start: "2018-01-01",
        term: 9
      },
      {
        name: "e",
        rent: 1200,
        start: "2018-07-01",
        term: 12
      }
    ]
  },
  {
    id: 3,
    pet: true,
    bedrooms: [
      {
        name: "a",
        rent: 1150,
        start: "2018-09-01",
        term: 12
      },
      {
        name: "b",
        rent: 1200,
        start: "2018-02-01",
        term: 9
      },
      {
        name: "c",
        rent: 1250,
        start: "2017-10-01",
        term: 12
      },
      {
        name: "d",
        rent: 1250,
        start: "2018-01-01",
        term: 9
      },
      {
        name: "e",
        rent: 1300,
        start: "2018-07-01",
        term: 12
      }
    ]
  },
  {
    id: 4,
    pet: false,
    bedrooms: [
      {
        name: "a",
        rent: 1200,
        start: "2018-09-01",
        term: 12
      },
      {
        name: "b",
        rent: 1200,
        start: "2018-02-01",
        term: 9
      },
      {
        name: "c",
        rent: 1350,
        start: "2017-10-01",
        term: 12
      },
      {
        name: "d",
        rent: 1350,
        start: "2018-01-01",
        term: 9
      },
      {
        name: "e",
        rent: 1500,
        start: "2018-07-01",
        term: 12
      }
    ]
  }
];

export const bedroomKey = [
  {
    name: "a",
    x: 10,
    y: 10,
    width: 125,
    height: 75
  },
  {
    name: "b",
    x: 10,
    y: 85,
    width: 125,
    height: 75
  },
  {
    name: "c",
    x: 10,
    y: 160,
    width: 125,
    height: 75
  },
  {
    name: "d",
    x: 335,
    y: 65,
    width: 125,
    height: 85
  },
  {
    name: "e",
    x: 335,
    y: 150,
    width: 125,
    height: 85
  }
];

const kitchenY = 213;
const kitchenHeight = 22;

const islandY = 165;

export const furnitureRects = [
  {
    name: "kitchen bar",
    shapes: [
      {
        x: 135,
        y: kitchenY,
        width: 200,
        height: kitchenHeight
      }
    ]
  },
  {
    name: "range",
    shapes: [
      {
        x: 253,
        y: kitchenY,
        width: 35,
        height: kitchenHeight
      }
    ]
  },
  {
    name: "kitchen island",
    shapes: [
      {
        x: 175,
        y: islandY,
        width: 120,
        height: 30
      }
    ]
  },
  {
    name: "kitchen sink",
    shapes: [
      {
        x: 255,
        y: islandY + 5,
        width: 30,
        height: 20
      }
    ]
  },
  {
    name: "fridge",
    shapes: [
      {
        name: "body",
        x: 135,
        y: kitchenY,
        width: 50,
        height: kitchenHeight
      },
      {
        name: "door left",
        x: 135,
        y: kitchenY,
        width: 25,
        height: 3
      },
      {
        name: "fridge door right",
        x: 160,
        y: kitchenY,
        width: 25,
        height: 3
      }
    ]
  },
  {
    name: "living room rug",
    shapes: [
      {
        x: 200,
        y: 80,
        width: 100,
        height: 65
      }
    ]
  },
  {
    name: "coffee table",
    shapes: [
      {
        x: 237,
        y: 90,
        width: 40,
        height: 20
      }
    ]
  },
  {
    name: "couch",
    shapes: [
      {
        x: 227,
        y: 120,
        width: 60,
        height: 20
      }
    ]
  },
  {
    name: "chair",
    shapes: [
      {
        x: 205,
        y: 90,
        width: 20,
        height: 20
      }
    ]
  }
];
