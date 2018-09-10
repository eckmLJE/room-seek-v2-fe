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
        name: "kitchen bar",
        type: "rectangle",
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
        name: "range rect",
        type: "rectangle",
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
        name: "island rect",
        type: "rectangle",
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
        name: "sink rect",
        type: "rectangle",
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
        type: "rectangle",
        name: "body",
        x: 135,
        y: kitchenY,
        width: 50,
        height: kitchenHeight
      },
      {
        type: "rectangle",
        name: "door left",
        x: 135,
        y: kitchenY,
        width: 25,
        height: 3
      },
      {
        type: "rectangle",
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
        name: "rug rect",
        type: "rectangle",
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
        name: "coffee table rect",
        type: "rectangle",
        x: 237,
        y: 92,
        width: 40,
        height: 18
      }
    ]
  },
  {
    name: "couch",
    shapes: [
      {
        name: "couch body",
        type: "rectangle",
        x: 230,
        y: 120,
        rx: 3,
        ry: 3,
        width: 55,
        height: 20
      },
      {
        name: "couch inner body",
        type: "rectangle",
        x: 235,
        y: 120,
        rx: 3,
        ry: 3,
        width: 45,
        height: 15
      },
      {
        name: "cushion divider-1",
        type: "line",
        x1: 250,
        x2: 250,
        y1: 120,
        y2: 135
      },
      {
        name: "cushion divider-2",
        type: "line",
        x1: 265,
        x2: 265,
        y1: 120,
        y2: 135
      }
    ]
  },
  {
    name: "chair",
    shapes: [
      {
        name: "chair outer",
        type: "rectangle",
        x: 205,
        y: 90,
        rx: 3,
        ry: 3,
        width: 20,
        height: 22
      },
      {
        name: "chair inner",
        type: "rectangle",
        x: 210,
        y: 93,
        rx: 3,
        ry: 3,
        width: 15,
        height: 16
      }
    ]
  }
];
