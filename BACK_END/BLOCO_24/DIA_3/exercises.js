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

// 6
db.movies.find(
  { ratings: { $elemMatch: { $gt: 103 } } },
  { title: 1, ratings: 1, _id: 0}
);

// 7
db.movies.find(
  { 
    ratings: {
      $elemMatch: {
        $gte: 100,
        $lte: 105,
      },
    },
  },
  { title: 1, ratings: 1, _id: 0 }
);

// 8
db.movies.find(
  { ratings: {
    $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0]  } }
  },
  { title: 1, ratings: 1, _id: 0}
);

// 9
db.movies.find(
  {
    ratings: { $elemMatch: { $gt: 103 } },
    category: { $elemMatch: { $eq: "adventure"} }
  },
  { title: 1, ratings: 1, category: 1, _id: 0}
);

// 10 
db.movies.find({ category: { $size: 2 }}, { title: 1, _id: 0 });

// 11
db.movies.find({ ratings: { $size: 4 }}, { title: 1, _id: 0});

// 12
db.movies.find(
  {
    budget: { $mod: [5, 0] },
    category: { $size: 2 }
  },
);

// 13
db.movies.find(
  {
    $or: [
      { category: { $all: ["sci-fi"] } },
      { ratings: { $elemMatch: { $gt: 199 } } },
    ]
  },
  { title: 1, ratings: 1, category: 1, _id: 0 },
);

// 14
db.movies.find(
  {
    ratings: { $size: 4 },
    category: { $in: ["adventure", "family"]},
    imdbRating: { $not: { $lt: 7 }},
  },
);

// 15
db.movies.updateOne(
  { title: "Batman"}, 
  {
    $set: {
      description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
    },
  },
);

// 16
db.movies.updateOne(
  { title: "Godzilla"}, 
  {
    $set: {
      description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
    },
  },
);

// 17
db.movies.updateOne(
  { title: "Home Alone"}, 
  {
    $set: {
      description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
    },
  },
);

// 18
db.movies.find({ description: { $regex: /^The/ }});

// 19
db.movies.find({ description: { $regex: /humanity.$/ }})
