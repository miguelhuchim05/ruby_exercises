const personNames = ["Pedro", "Maria", "Rosa"];
const animalNames = ["Caballo", "Oso", "Perro"];
const stuffNames = ["Petroleo", "Carne", "Rosca"];
const names = [...personNames, ...animalNames, ...stuffNames];

const findNames = (names, term) => {
  term = term.toLowerCase();
  return names.filter(name => {
    return name.toLowerCase().includes(term);
  });
}

console.log(findNames(names, "pe"));
