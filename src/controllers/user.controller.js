import { createUser } from "../models/User.js";

export const ctrlCreateUser = async (req, res) => {
    try {
       const user = await createUser(req.body);
       return res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({message: "Error en el servidor"})
    }
    
}