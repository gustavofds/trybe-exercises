// 1
db.movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 7.7 } } );

// 2
db.movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 }  });