// 1
db.clientes.aggregate([
  { $match: { sexo: "MASCULINO" } }
]);

// 2
db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31")
      },
    },
  },
]);

// 3
db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31")
      },
    },
  },
  { $limit: 5 }
]);

// 4
db.clientes.aggregate([
  { $match: { "endereco.uf": "SC" } },
  { $group: { _id: "$endereco.uf", total: { $sum: 1 }  }  },
]);

// 5
db.clientes.aggregate([
  { $group: { _id: "$sexo", total: { $sum: 1 } } },
]);
