import { connect } from "mongoose";

export const conectarDB = async () => {
    try{
    await connect("mongodb://127.0.0.1:27017/ipfb");
    console.log("Connect DB")
    }catch(e){
        console.log("Error al conectar con la BD:" + e)
    }
}