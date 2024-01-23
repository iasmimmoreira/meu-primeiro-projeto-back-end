const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function mostraPorta(){
    console.log('SERVIDOR CRIADO E RODANDO NA PORTA ', porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)
