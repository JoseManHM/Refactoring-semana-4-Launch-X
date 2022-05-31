const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const filterByMission = ExplorerService.filterByMission(explorers, mission);
        return filterByMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernamesByMission;
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const amountByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return amountByMission;
    }

    static getValidationInNumber(number){
        const Validation = FizzbuzzService.applyValidationInNumber(number);
        return Validation;
    }
}

module.exports = ExplorerController;