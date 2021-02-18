import app from './src/app'
const port = 3000

/**
 * função listen é chamada recebendo um número referente a porta na qual a aplicação ficará exposta
 */
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})