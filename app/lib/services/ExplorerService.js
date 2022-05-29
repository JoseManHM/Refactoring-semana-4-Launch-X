class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersIn = explorers.filter((explorer) => explorer.mission == mission);
        return explorersIn;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        return explorersInNode.length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
    }
}
module.exports = ExplorerService;