// 1
db.bios.find({ _id: 8 });

// 2
db.bios.find({ _id: 8 }, { name: 1 });

// 3
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 });

// 4
db.bios.find({ "name.first": "John"  }).pretty();