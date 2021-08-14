// Para todas as alterações realizadas, você deve sempre atualizar ou adicionar o campo lastUpdate , que armazena a data da última alteração com o tipo timestamp

// 14
db.xmen.updateMany(
  { class: "unknown" },
  { 
    $unset: { class: "" },
    $currentDate: {
      lastUpdate: { $type: "timestamp" } 
    },
  }
);

// 15
db.xmen.updateMany(
  {},
  {
    $rename: {
      name: "hero_name",
      true_name: "full_name",
    },
    $set: { power: 100 },
    $currentDate: {
      lastUpdate: { $type: "timestamp"  }
    },
  }
);

// 16
db.xmen.updateMany(
  { 
    $and: [
      { class: { $in: ["omega", "gama"] } },
      { power: { $lt: 500}}
    ]
  }, 
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp"  }
    },
    $set: { power: 500 }
  }
);

  // other solution:
db.xmen.updateMany(
    { class: { $in: ["omega", "gama"] } },
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $max: { power: 500 },
    },
);

// 17
db.xmen.updateMany(
  { class: "gama" },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $min: { power: 300 },
  }
);

// 18
db.xmen.updateMany(
  { class: { $exists: false } },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $inc: { power: -100 }
  }
);

// 19
db.xmen.updateMany(
  {
    $or: [
      { occupation: "Senior Staff", power: { $gt: 100} },
      { ocupation: "Junior Staff", power: { $gt: 200 }  }
    ]
  },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: { areas: ["Students Room"]}
  }
);
