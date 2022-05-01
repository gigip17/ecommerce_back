const mongoose = require('mongoose');
const DB ='marketplace';
const URI = `mongodb+srv://usertest2:test123@cluster-clickcollect.tbqld.mongodb.net/ecommerce?retryWrites=true&w=majority`

const MongoDBClient = {
    initialize: () => {
        try {
            const client = mongoose.connect(URI, { 
                useNewUrlParser:true, 
                useUnifiedTopology:true
            })
            client.then(() => console.log(`sucessfull to DB: ${DB} ` ))
        } catch(e){
            throw Error(e)
        }
    }
}
module.exports = MongoDBClient