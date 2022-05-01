const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;
const MongoDBClient = require('./mongoClient');

//API REst exemple
const Product = require('./models/products');
app.get('/products', async(req, res) => {
    const products = await Product.find({})
    try{
        res.send(products)
    }catch(e) {
        res.status(500).send(err)
    }
})

app.use(cors())
app.get('/', (req,res) => {
    res.send('hello Express !')
})

app.listen(PORT,()=> {
    console.log(`Exemple app listening at localhost:${PORT}`)
    MongoDBClient.initialize();
})
