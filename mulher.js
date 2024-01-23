const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher (request, response) {
    response.json({
        nome: 'Simaria',
        imagem: 'https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg',
        minibio: 'Dev e instrutora'
    })
}

function mostraPorta(){
    console.log('SERVIDOR CRIADO E RODANDO NA PORTA ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
