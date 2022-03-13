const menu = {
  categories: [
    {
      translation: {
        ru: {
          name: "Пицца",
        },
        ro: {
          name: "Pizza",
        },
      },
      _id: "62290b169115c3b3ad3647a6",
      __v: 0,
    },
    {
      translation: {
        ru: {
          name: "Вино",
        },
        ro: {
          name: "Vin",
        },
      },
      _id: "62290b639115c3b3ad3647a8",
      __v: 0,
    },
    {
      translation: {
        ru: {
          name: "Напитки",
        },
        ro: {
          name: "Bauturi",
        },
      },
      _id: "62290b639115c3b3ad3647a9",
      __v: 0,
    },
  ],
  products: [
    {
      translation: {
        ru: {
          name: "Пеперони",
          description: "Описание",
          category: "Пицца",
        },
        ro: {
          name: "Peperoni",
          description: "description",
          category: "Pizza",
        },
      },
      _id: "6229cf4b45e8a1543d7e279f",
      image: "dc1ccb12-c2ff-4712-a7c6-f7d25b9468ac.jpg",
      price: "200",
      metrics: "500 g",
      __v: 0,
    },
    {
      translation: {
        ru: {
          name: "Маргарита",
          description: "Описание",
          category: "Пицца",
        },
        ro: {
          name: "Margarita",
          description: "description",
          category: "Pizza",
        },
      },
      _id: "6229cf6845e8a1543d7e27a1",
      image: "e64e2aeb-6e45-4b7f-8f41-88a8e5817103.jpg",
      price: "180",
      metrics: "500 g",
      __v: 0,
    },
    {
      translation: {
        ru: {
          name: "Sprite",
          description: "Напиток",
          category: "Напитки",
        },
        ro: {
          name: "Sprite",
          description: "description",
          category: "Bauturi",
        },
      },
      _id: "6229cf6845e8a1543d7e27a2",
      image: "e64e2aeb-6e45-4b7f-8f41-88a8e5817104.jpg",
      price: "12",
      metrics: "500 ml",
      __v: 0,
    }
  ],
};

// menu["categories"].map(category => console.log(category["translation"]["ru"]["name"]))

export default menu;