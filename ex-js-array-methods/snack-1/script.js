const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const arrey = [];
names.forEach((name) => {
  arrey.push(`'${name}'`);
});

console.log(arrey.join(","));
