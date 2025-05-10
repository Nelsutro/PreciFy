import Usuario from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registro = async (req, res) => {
    const {nombre, usuario, correo, contrasenia, rol} = req.body;

    try {

        const hashContrasenia = await bcrypt.hash(contrasenia, 10);

        const nuevoUsuario = new Usuario ({
            nombre,
            usuario,
            correo,
            contrasenia: hashContrasenia,
            rol
        });

        const usuarioGuardado = await nuevoUsuario.save();

        jwt.sign(
            {
            id: usuarioGuardado._id
        }, 
        "secreto", 
        {
            expiresIn: "1d",
        },
        (error, token) => {
            if (error) {
                console.log(error);
            }
            res.json({token});
        }
        );

        // res.json({
        //     id: usuarioGuardado._id,
        //     usuario: usuarioGuardado.usuario,
        //     correo: usuarioGuardado.correo,
        //     fechaRegistro: usuarioGuardado.fechaRegistro,
        //     fechaCambioContrasenia: usuarioGuardado.fechaCambioContrasenia
        // });

    } catch (error) {
        console.log(error);
    }
}

export const login = (req, res) => res.send("login");