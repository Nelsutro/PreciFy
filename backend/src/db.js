import mongoose from "mongoose"

export const conectarDB = async () => {
        try {
            await mongoose.connect("mongodb+srv://preciFy:preciFy.8103@cluster0.hlkbow5.mongodb.net/precify");
            console.log("Conexión exitosa");
        } catch (error) {
            console.log(error);
        }
    };

