const Reader = require("./app/lib/utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");
console.log(explorers);