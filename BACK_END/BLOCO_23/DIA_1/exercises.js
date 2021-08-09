// 1
db.bios.find({ _id: 8 });

// 2
db.bios.find({ _id: 8 }, { name: 1 });

// 3
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 });

// 4
db.bios.find({ "name.first": "John"  }).pretty();

// 5
db.bios.find().limit(3).pretty();

// 6
db.bios.find().limit(2).skip(5);

/*
Mongoimport for exercises 7 to 10:
mongoimport --db=sample --collection=books --file=Desktop/books.json
*/
// 7
db.books.count();

// 8
db.books.find({ status: "PUBLISH" }).count()
// or: db.books.count({ status: "PUBLISH" })
