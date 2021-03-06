//const fs = require("fs");
const Reader = require("./app/lib/utils/Reader");
const ExplorerService = require("./app/lib/services/ExplorerService");
const FizzbuzzService = require("./app/lib/services/FizzbuzzService");

// // Part 1 Read json file ===========================
// const rawdata = fs.readFileSync("explorers.json");
// const explorers = JSON.parse(rawdata);
const explorer = Reader.readJsonFile("explorers.json");

// Part 2: Get the quantity of explorers names in node
const explorersInNodeFirst = ExplorerService.filterByMission(explorer, "node");
console.log(explorersInNodeFirst);
const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorer, "node");
console.log(explorersInNode);

// Part4: Get the explorer's usernames in Node
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorer, "node");
console.log(usernamesInNode);

// DEAD CODE: Part 5,6,7, please remove this and go to Part 8!

// Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.

// const explorersInNodeAndFizzTrick = explorersInNodeFirst.map((explorer) => assignFizzTrick(explorer));

// Part 6: Get a new list of explorers in node if the score number is divisible by 5, we need to set a new property called trick and set the value BUZZ, if not this value should be just the score


// const explorersInNodeAndBuzzTrick = explorersInNodeFirst.map((explorer) => assignBuzzTrick(explorer));

//Part7: Get a new list of explorers in Node, if the score number is divisible by 3 AND by 5 we need to set a new property called FIZZBUZZ, if not this value should be the same score value


// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO

const explorer1 = {name: "Explorer1", score: 1};
FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
console.log(explorer1);
const explorer3 = {name: "Explorer3", score: 3};
FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
console.log(explorer3);
const explorer5 = {name: "Explorer5", score: 5};
FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
console.log(explorer5);
const explorer15 = {name: "Explorer15", score: 15};
FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
console.log(explorer15);