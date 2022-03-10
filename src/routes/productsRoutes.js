//CRUD
//C:Create / crear
//R:read  / leer
//U:Update  /actulizar
//D:Delete  / borrar


const express = require('express')
const { getALLProducts, getProductsByID, getUsuario, getaddProducts, getnosotros, login, contacto} = require('../controllers/productsControllers')


const productsRoutes = express.Router()

productsRoutes.get("/", getALLProducts)

productsRoutes.get('/tienda', getProductsByID)

productsRoutes.get('/usuario', getUsuario)

productsRoutes.get('/addproducts', getaddProducts)

productsRoutes.get('/nosotros', getnosotros)

productsRoutes.get('/login', login)

productsRoutes.get('/contacto', contacto)

module.exports = productsRoutes