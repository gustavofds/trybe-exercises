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