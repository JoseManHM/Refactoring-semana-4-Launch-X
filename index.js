const ExplorerController = require("./app/lib/controllers/ExplorerController");
const testFiltro = ExplorerController.getExplorersByMission("node");
console.log(testFiltro);
const testUsernames = ExplorerController.getExplorersUsernamesByMission("node");
console.log(testUsernames);
const testAmount = ExplorerController.getExplorersAmountByMission("node");
console.log(testAmount);