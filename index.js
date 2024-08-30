const express = require('express');

const app = express();

// const id = req.params.id
// console.log('hello world')

app.get("/exercicio1", (req, res) => {
    
    const num1 = req.query.num1
    const num2 = req.query.num2
    
    const resultado = Number(num1) + Number(num2)

    res.json({ menssage: resultado })
})

app.get("/exercicio2", (req, res) => {
    
    const num1 = req.query.num1
    const num2 = req.query.num2
    
    const resultado = Number(num1) * Number(num2)

    res.json({ menssage: resultado })
})

app.get("/exercicio3", (req, res) => {
    
    const num1 = req.query.num1
    const num2 = req.query.num2
    const num3 = req.query.num3
    const num4 = req.query.num4
    const num5 = req.query.num5
    
    const resultado = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)

    res.json({ menssage: resultado / 5 })
})

app.get("/exercicio4", (req, res) => {
    
    const num1 = req.query.num1
    
    
    const resultado = Number(num1) 

    res.json({ menssage: (9*resultado+160) / 5 })
})

app.get("/exercicio5", (req, res) => {
    
    const num1 = req.query.num1
    
    
    const resultado = Number(num1) 

    res.json({ menssage: resultado * 1.60934 })
})


app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})