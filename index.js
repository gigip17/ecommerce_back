const express = require('express');
const app = express();
const PORT = 4000

app.get('/', (req,res) => {
    res.send('hello Express !')
})

app.listen(PORT,()=> {
    console.log(`Exemple app listening at localhost:${PORT}`)
})
