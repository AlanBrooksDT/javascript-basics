const createPerson = (name, age) => {
  return {
    name: name, 
    age: age,
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true; }
  else {
    return false; }
};

const isOver65 = person => {
  if (person.age > 65) {
  return true; } 
  else {
  return false; }
};

const getAges = people => {
  const allAges = people.map(person => person.age);
  return allAges;
};

const findByName = (name, people) => people.find(obj => obj.name === name);

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
