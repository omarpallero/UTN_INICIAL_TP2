const express = require('express')
const databaseConnection = require('../config/database')
const productsRoutes = require('./routes/productsRoutes')
const path = require ('path')
//inicializar express//
const app = express()


//permite viajar datos como package json o arrays
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//conectarnos a la DB//
databaseConnection.connect()

//configuracion
app.use(express.json());
app.set("views", path.join(__dirname,"views"));
app.set("view engine",".ejs");
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use('/products', productsRoutes)



app.listen(4000, ()=>{
    console.log('servidor corriendo en puerto 4000')
})