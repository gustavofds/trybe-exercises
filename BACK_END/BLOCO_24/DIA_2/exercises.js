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
