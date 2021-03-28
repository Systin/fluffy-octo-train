const model = require('../models/usuarios');

module.exports = app =>{
    app.get('/usuarios', (req,res) => res.send('Estamos na tela de usuários'));
    app.post('/usuarios', (req,res) => 
    {
        console.log(req.body);
        model.adiciona(req.body);
        res.send('Estamos na tela de usuários');
    })
}