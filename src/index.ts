import express from "express";
import axios from "axios";

const app = express();

app.get("/teste", (req, res) => {
    setTimeout(() => {
        res.status(500).send({
            nome: "Fulano",
            idade: 20,
        });
    }, 2000);
});

app.get("/", (req, res) => {
    res.send({
        nome: "Teste",
        idade: 99,
    });
});

app.listen(3333, () => {
    console.log("API está rodando...");
});
