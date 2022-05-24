class MysqlConnection{
    mysql = require('mysql');
    result = "";
    connection = this.mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'app_triangulos'
    });

    initializeConnection(){
        this.connection.connect( (err) => {
            if(err) throw err
            console.log('La conexion funciona')
        });
    }

    closeConnection(){
        this.connection.end()
    }

    selectStatement(query){
        this.connection.query(`${query}`, (err, rows) => {
            if(err) throw err
            if (rows != "") {
                console.log("Exito")
            } else {
                console.log("Fallo")
            }
        })
    }

}

nuevaConexion = new MysqlConnection();
nuevaConexion.initializeConnection();
nuevaConexion.selectStatement('SELECT nombreUser, pass FROM usuarios WHERE nombreUser = "Uriel" AND pass = "query123" ');
nuevaConexion.closeConnection();

/*
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'app_triangulos'
})
*/