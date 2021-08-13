// 1
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: "superhero" } }
);
