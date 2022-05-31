const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "FizzBuzz Api Welcome"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    //Envia los explorers en dicha mission
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    //Envia la mision y la cantidad de explorers
    const mission = req.params.mission;
    const amountExplorersInMission = ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission: req.params.mission, quantity: amountExplorersInMission});
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    //Envia los nombres de usuario de los explorers de una mission
    const mission = req.params.mission;
    const usernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({mission: mission, explorers: usernamesByMission});
});

app.get("/v1/fizzbuzz/:score", (req, res) => {
    //Recibe un número y aplicar la validación de Fizzbuzz
    const number = req.params.score;
    const applyValidationInNumber = ExplorerController.getValidationInNumber(number);
    res.json({score: number, trick: applyValidationInNumber});
});

app.listen(port, () => {
    console.log(`Fizzbuzz API in localhost: ${port}`);
});