class MyColors {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

//Create VARIABLE and Export it.
const allMyColors = [
  new MyColors("brightred", "#E74C3C"),
  new MyColors("soothingpurple", "#9B59B6"),
  new MyColors("skyblue", "#5DADE2"),
  new MyColors("leafygreen", "#48C9B0"),
  new MyColors("sunkissedyellow", "#F4D03F"),
  new MyColors("groovygray", "#D7DBDD"),
];

//Create Funciton and Export it.
exports.getRandomColor = () =>{
    return allMyColors[Math.floor(Math.random() * allMyColors.length)];
}

//Keyword [Exports].Property = function or variable name. (Syntax).
exports.allColors = allMyColors;
