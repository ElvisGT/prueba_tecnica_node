import mongoose from "mongoose";
import { DB_URI } from "./env.config";

mongoose.set('strictQuery',true)

const db_conection = mongoose.connect(DB_URI as string)
    .then(data => console.log('Conectado exitosamente a la base de datos'))
    .catch(err => console.log('Ha ocurrido el siguiente error al conectar:',err))

export default db_conection;