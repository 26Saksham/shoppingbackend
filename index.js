// require('dotenv').config()

import express from 'express'
import connection from './database/db.js';
import Router from './Routes/Routes.js'
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express()
// console.log("MongoDB database connection established successfully.");
// })
    

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json({extended:false}));
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',Router);
const port=8000;

app.listen(port,()=>console.log('server is started at port no.'+port));

connection();