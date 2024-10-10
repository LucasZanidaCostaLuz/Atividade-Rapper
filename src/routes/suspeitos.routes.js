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

suspeitoRoutes.post("/", (req, res) => {
    const{nome, idade, descricao, envolvimento} = req.body;
    if (!nome || !Number.isInteger(idade)){
        return res.status(400).json({
            message: "coloque um nome valido ou responda uma idade valida seu burro do krl"
        })
    }

    if(envolvimento != "sim" && envolvimento != "não"){
        return res.status(400).json({
            message: "coloque sim ou não em envolvimento"
        })
    }

    const novoSuspeito = {
        id : Math.floor(Math.random() * 1000000),
        nome,
        idade,
        descricao: descricao || [],
        envolvimento
    }

    suspeitos.push(novoSuspeito)

    return res.status(201).json({
        message: "suspeito denunciado com sucesso", 
        novoSuspeito
    })
})