const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express()


app.get('/api/v1/products', (req, res) => res.send('Hello products!'))

app.listen(PORT, () => console.log(`Example app runnig`))