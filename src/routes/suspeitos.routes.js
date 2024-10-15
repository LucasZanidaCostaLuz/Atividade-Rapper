import { Router } from "express";

const suspeitoRoutes = Router();

let suspeitos = [
    {
        id : Math.floor(Math.random() * 100),
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

suspeitoRoutes.post("/", (req, res) => {
    const{nome, idade, descricao, envolvimento} = req.body;
    if (!nome || !Number.isInteger(idade) || !idade || !envolvimento){
        return res.status(400).json({
            message: "coloque um nome valido ou responda uma idade valida"
        })
    }

    if(envolvimento != "sim" && envolvimento != "não"){
        return res.status(400).json({
            message: "coloque sim ou não em envolvimento"
        })
    }

    const novoSuspeito = {
        id : Math.floor(Math.random() * 100),
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

suspeitoRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const suspeito = suspeitos.find((s) => s.id == id)

    if (!suspeito) {
        return res.status(404).json({ message: `Suspeito com id ${id} não encontrado!`})
    }
    return res.status(200).json(suspeito)
})

suspeitoRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const {nome, idade, descricao, envolvimento} = req.body

    const suspeito = suspeitos.find((s) => s.id == id)

    if (!nome || !Number.isInteger(idade) || !idade || !envolvimento){
        return res.status(400).json({
            message: "coloque um nome valido ou responda uma idade valida"
        })
    }

    if(envolvimento != "sim" && envolvimento != "não"){
        return res.status(400).json({
            message: "coloque sim ou não em envolvimento", suspeito
        })
    }

    suspeito.nome = nome;
    suspeito.idade = idade;
    suspeito.descricao = descricao || [];
    suspeito.envolvimento = envolvimento

    return res.status(200).json({
        message: "suspeito atualizado com sucesso!", suspeito,
    })
})

suspeitoRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    const suspeito = suspeitos.find((s) => s.id == id)

    if (!suspeito) {
        return res.status(404).json({ message: `Suspeito com id ${id} não encontrado!`})
    }
    
    suspeitos = suspeitos.filter((s) => s.id != id)

    return res.status(200).json({
        message: "Suspeito removido com sucesso!",
        suspeito
    })
})

export default suspeitoRoutes