import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    usuario: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ["freelancer", "empresa"]
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },
    fechaCambioContrasenia: {
        type: Date,
        default: Date.now
    },
})

export default mongoose.model("usuarios", userSchema)