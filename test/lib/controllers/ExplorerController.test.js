const ExplorerController = require("./../../../app/lib/controllers/ExplorerController");

describe("ExplorerController tests", () => {
    test("Get explorer by mission", () => {
        const ExplorersByMission = ExplorerController.getExplorersByMission("node");
        expect(ExplorersByMission[0].githubUsername).toBe("ajolonauta1");
    });

    test("Get usernames by mission", () => {
        const UsernamesByMission = ExplorerController.getExplorersUsernamesByMission("node");
        expect(UsernamesByMission[0]).toBe("ajolonauta1");
    });

    test("Get amount of explorers by mission", () => {
        const AmountByMission = ExplorerController.getExplorersAmountByMission("node");
        expect(AmountByMission).toBe(10);
    });
});