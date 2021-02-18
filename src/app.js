import express from 'express'
import bodyParser from 'body-parser'

const app = express() //nova instancia do express
app.use(bodyParser.json()) //configurando o express para usar middleware, no caso para trasnformar o corpo das requisições em JSON

app.get('/', (request, response) => response.send('Hello World!'))
app.get('/products', (request, response) => response.send([{
    name: 'Default product',
    description: 'product description',
    price: 100
}]))

export default app