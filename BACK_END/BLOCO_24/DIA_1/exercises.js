// 1
db.movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 7.7 } } );

// 2
db.movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 }  });

// 3
db.movies.updateOne(
  { title: "Home Alone" },
  { $set: { budget: 15, imdbRating: 5.5 } }
);

// 4
db.movies.updateOne(
  { title: "Batman" },
  { $inc: { imdbRating: 2 } }
);

// 5
db.movies.updateOne(
  { title: "Home Alone" },
  { $inc: { budget: 5 }  }
);

// 6
db.movies.updateOne(
  { title: "Batman" },
  { $mul: { imdbRating: 4 } }
);

// 7
db.movies.updateOne(
  { title: "Batman" },
  { $rename: { budget: "estimatedBudget" } }
  );

// 8
db.movies.updateOne(
  { title: "Home Alone" },
  { $min: { budget: 5 }}
);

// 9
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $max: { imdbRating: 8.6 },
    $set: { "category.1" : "thriller" }
  }
);

// 10
db.movies.updateOne(
  { title: "Home Alone" },
  { $currentDate: {
      lastUpdated: { $type: "timestamp" }
    },
  },
);

// 11
db.movies.updateMany({}, { $set: { sequels: 0 } });

// 12
db.movies.updateMany({}, { $unset: { budget: "", estimatedBudget: "" } });

// 13
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $max: { imdbRating: 17 }}
);
