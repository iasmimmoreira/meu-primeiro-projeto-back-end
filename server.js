const express = require("express")

const app = express()
const porta = 3333

function mostraPorta(){
    console.log('SERVIDOR CRIADO E RODANDO NA PORTA ', porta)
}

app.listen(porta, mostraPorta)
