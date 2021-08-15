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