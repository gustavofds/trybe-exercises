// 1
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: "superhero" } }
);

// 2
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: { $each: ["villain", "comic-based"] } } }
);

// 3
db.movies.updateOne(
  { title: "Batman" },
  { $pull: { category: "action" }}
);

// 4
db.movies.updateOne(
  { title: "Batman" },
  { $pop: { category: -1 } }
);

// 5
db.movies.updateOne(
  { title: "Batman" },
  { $pop: { category: 1 } }
);

// 6
db.movies.updateOne(
  { title: "Batman" },
  { $addToSet: { category: "action" } }
);

// 7
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $push: { category: "90's" } }
);

// 8
db.movies.updateOne(
  { title: "Home Alone" },
  { $set:
    { cast: [
      { "actor": "Macaulay Culkin", "character": "Kevin" }, { "actor": "Joe Pesci", "character": "Harry" }, { "actor": "Daniel Stern" }
      ]
    }
  }
);

// another solution:
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      cast: {
        $each: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin",
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry",
          },
          {
            "actor": "Daniel Stern",
          },
        ],
      },
    },
  },
);

// 9
db.movies.updateOne(
  { title: "Home Alone", "cast.actor": "Daniel Stern" },
  { $set: { "cast.$.character": "Marv" } }
);
