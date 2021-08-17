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

