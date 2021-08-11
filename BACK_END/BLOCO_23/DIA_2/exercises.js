// 1
// Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.
db.superheroes.findOne();
/*
{
	"_id" : ObjectId("6112f1c51c93790721bea954"),
	"name" : "Absorbing Man",
	"alignment" : "bad",
	"gender" : "Male",
	"race" : "Human",
	"aspects" : {
		"eyeColor" : "blue",
		"hairColor" : "No Hair",
		"height" : 193,
		"weight" : 55.33
	},
	"publisher" : "Marvel Comics"
}
*/

// 2
db.superheroes.find({ "aspects.height": { $lt: 180 } });

// 3
db.superheroes.count({ "aspects.height": { $lt: 180 } });

// 4
db.superheroes.count(     { "aspects.height": { $lte: 180 } } );

// 5
db.superheroes.findOne({ "aspects.height": { $gte: 200 }});

// 6
db.superheroes.count({ "aspects.height": { $gte: 200 }});

// 7
db.superheroes.find({ "aspects.eyeColor": "green" });

// 8
db.superheroes.count({ "aspects.eyeColor": "blue" });

// 9
db.superheroes.find({ "aspects.hairColor": { $in: ["black", "No Hair"] }  });

// 10
db.superheroes.count({ "aspects.hairColor": { $in: ["black", "No Hair"] }  });

// 11
db.superheroes.count(     { "aspects.hairColor": { $nin: ["black", "No Hair"] } } );

// 12
db.superheroes.count({ "aspects.height": { $not: { $gt: 180 } } });

// 13
db.superheroes.find({ $or: [{ race: { $ne: 'Human' } }, { "aspects.height": { $not: { $gt: 180}  }}] });

// 14
db.superheroes.find({
	$and: [
		{ $or: [{ "aspects.height": 180 }, { "aspects.height": 200}] },
		{ "publisher": "Marvel Comics" } 
	]
});

// 15
db.superheroes.find({
	$and: [
		{ "aspects.weight": { $gte: 80, $lte: 100 } },
		{ $or: [ { race: "Human" }, { race: "Mutant" } ] },
		{ publisher: { $ne: "DC Comics" } }
	]
});

// 16
db.superheroes.count({ race: { $exists: false } });

// 17
db.superheroes.count({ "aspects.hairColor": { $exists: 1 } });

// 18
db.superheroes.deleteOne({ "publisher": "Sony Pictures" });

// 19
db.superheroes.deleteMany({ "publisher": "George Lucas" });


