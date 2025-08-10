const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.join(__dirname,'config', 'config.env')})
const connectDatabase = require('./config/connectDatabase');

const products = require('./routes/product');
const orders = require('./routes/order')

connectDatabase();
app.use(express.json())
app.use('/api/v1/',products);
app.use('/api/v1/',orders);


app.listen(process.env.PORT,()=>{
    console.log(`server listeing to port ${process.env.PORT} in prod`);
});

