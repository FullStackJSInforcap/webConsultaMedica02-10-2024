const express = require('express');

class Server{

    constructor(){
        this._app = express();
        this._port = 4000;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this._app.set('view engine', 'hbs');
    }

    routes(){
        this._app.use('/usuarios', require('../routes/usuarios'));
    }

    listen(){
        this._app.listen(this._port, () => {
            console.log(`Escuchando en el puerto ${this._port}`);
        });
    }

}

module.exports = Server;