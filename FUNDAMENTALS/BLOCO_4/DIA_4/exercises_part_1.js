let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem-vinda, ${info.personagem}`);

info.recorrente = "Sim";
console.log(info);

for (let key in info) {
  console.log(key);
}

console.log("--------------------");

for (let key in info) {
  console.log(info[key]);
}

console.log("--------------------");

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log(info2);

for (let key in info) {
  if (info[key] !== info2[key]) {
    console.log(info[key] + " e " + info2[key]);
  } else {
    console.log(`Ambos ${key}s`);
  }
}
