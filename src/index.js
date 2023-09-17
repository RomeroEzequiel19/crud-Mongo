import express from "express";
import { conectarDB } from "./database.js";
import { user } from "./models/User.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola");
});

app.post('/register', async (req, res) => {
    try {
        const users = new  user (req.body);

        await users.save();

        return res.json({message: "Registro Exitoso"})
    } catch (error) {
        console.log("Error: " + error)
    }
})

app.listen(
  3000,
  () => {console.log("Servidor correindo en la oerieto 300")},
  conectarDB()
);
