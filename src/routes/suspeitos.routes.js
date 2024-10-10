import { Router } from "express";

const suspeitoRoutes = Router();

let suspeitos = [
    {
        id : Math.floor(Math.random() * 1000000),
        nome : "P. Diddy",
        idade : 54,
        descricao : ["negro", "1,78m", "tem tatuagem", "tem barba"],
        envolvimento : "sim"
    }
]

suspeitoRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos
    );
  });

export default suspeitoRoutes