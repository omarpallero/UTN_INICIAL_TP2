const mysql2 = require('mysql2')

const databaseConnection = mysql2.createConnection(
{
     host: 'localhost',
     user: 'root',
     database:'mostra la hilacha',
     port: 3306
     
})

databaseConnection.connect((error)=>{
   if(error) {
       console.log(error)
   } else {
       console.log('servidor esta conectado a MySQL')
   }

})

module.exports = databaseConnection