// 1
db.bios.find({ _id: 8 });

// 2
db.bios.find({ _id: 8 }, { name: 1 });

// 3
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 });