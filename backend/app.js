const express = require('express'),
server = express(),
cors = require('cors') 
mysql = require('mysql');



//MYSQL CONNECTION
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'fseletro'
});

server.use(cors());
server.use(express.json());

server.get('/',function(req, res){
    res.end('<html>Ok</html>');
});

    server.get('/produtos',function (req, res) {
        const sql = "SELECT * FROM produtos";
        db.query(sql,function(error, results){
            if (error){
                return error;
            }res.json(results);
        });
    });

    server.get('/msg',function (req, res) {
        const sql = "SELECT * FROM comentarios";
        db.query(sql,function(error, results){
            if (error){
                return error;
            }res.json(results);
        });
    });

    server.post('./msg', (req, res) => {
        const { nome, msg } = req.body
        const sql = `INSERT INTO comentarios(nome,msg) VALUES ('${nome}','${msg}')`;
        db.query(sql, (error, results) => {
            if (error){
                return error;
            }res.json(results);
        });
    });

server.listen(8080, () => {
    console.log("active server!");
});

