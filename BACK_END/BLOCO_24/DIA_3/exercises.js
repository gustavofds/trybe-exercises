// 1
db.movies.find(
  { category: { $all: ["action", "adventure"] } }
).pretty();

// 2
db.movies.find(
  {
    category: { $all: ["action"] },
    imdbRating: { $gt: 7 }
  }
).pretty()

// 3
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: { ratings: { $each: [85, 100, 102, 105] }}
  },
)

// 4
db.movies.updateOne(
  { title: "Godzilla" },
  { $push: { ratings: { $each: [78, 52, 95, 102 ] }}}
);

// 5
db.movies.updateOne(
  { title: "Home Alone" },
  { $push: { ratings: { $each: [200, 99, 65] }}}
);

