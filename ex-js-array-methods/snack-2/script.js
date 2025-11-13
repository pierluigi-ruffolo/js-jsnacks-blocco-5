const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

let arrey = [];
people.forEach((nomi) => {
  arrey.push(`'${nomi.name}'`);
});
const converti = arrey.join(",");
console.log(`Risultato: ${converti}`);
