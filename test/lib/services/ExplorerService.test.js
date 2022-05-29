const ExplorerService = require("./../../../app/lib/services/ExplorerService");

describe("ExplorerService", () => {
    test("Should return a list of explorers in node", () => {
        const explorers = [
            {
                mission: "node"
            }
        ];
        const ExplorersWithNode = ExplorerService.filterByMission(explorers, "node");
        expect(ExplorersWithNode.length).toBe(1);
    });

    test("Should return amount of explorers in node", () => {
        const explorers = [
            {
                name: "Woopa1",
                githubUsername: "ajolonauta1",
                score: 1,
                mission: "node",
                stacks: [
                    "javascript",
                    "reasonML",
                    "elm"
                ]
            }
        ];
        const ExplorersWithNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(ExplorersWithNode).toBe(1);
    });

    test("Should return a list of explorers usernames in node", () => {
        const explorers = [
            {
                name: "Woopa1",
                githubUsername: "ajolonauta1",
                score: 1,
                mission: "node",
                stacks: [
                    "javascript",
                    "reasonML",
                    "elm"
                ]
            }
        ];
        const ExplorersUsernamesWithNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(ExplorersUsernamesWithNode[0]).toBe("ajolonauta1");
    });
});