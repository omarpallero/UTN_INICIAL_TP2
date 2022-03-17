const databaseConnection = require("../../config/database")

const getALLProducts = (req, res) => {
    //res.send('Esto devuelve todos los registros')//
    res.render('pages/index')
}

const getProductsByID = (req, res) => {
    //res.send('Esto devuelve un solo producto')//
    res.render('pages/tienda')
}
const getUsuario = (req, res) => {
    databaseConnection.query("SELECT * FROM products", (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.send('pages/usuario', {
                products: data
            })
        }
    })


}

    //const { name, category, price, description, stock } = req.body

    //res.send(name + " " + category + " " + price + " " + description + " " + stock)
const addNewProduct = (req, res) => {
    databaseConnection.query("INSERT INTO products (name,category,price,description,stock)VALUES(?,?,?,?,?) ", 
    [name, category,parseFloat(price), description,parseInt(stock)],
        (error, data) => {
            if (error) {
                console.log(error)
            } else {

                res.render('pages/addproducts')
            }
        })
    }

    const addProducts = (req, res) => {
        res.render('pages/addproducts')
    }
    const getnosotros = (req, res) => {
        //res.send('Esto sirve para agregar productos')//
        res.render('pages/nosotros')
    }
    const login = (req, res) => {

        res.render('pages/login')
    }
    const contacto = (req, res) => {

        res.render('pages/contacto')
    }




    module.exports = { getALLProducts, getProductsByID, getUsuario, addProducts, addNewProduct, getnosotros, login, contacto }