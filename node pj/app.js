const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res_) => {
    res_.send('Olá, mother focker')

})

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)
});
