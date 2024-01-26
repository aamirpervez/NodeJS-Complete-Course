const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const myName = "Aamir";

//exports ley
//.name property

// exports.add = add;
// exports.name = myName;

module.exports = { add, sub, mult, div, myName };
