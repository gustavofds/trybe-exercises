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
