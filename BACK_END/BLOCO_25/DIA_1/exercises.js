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
