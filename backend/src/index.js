import app from "./app.js";
import { conectarDB } from "./db.js";

conectarDB();

app.listen(4000);
console.log("Servidor en el puerto", 4000);

