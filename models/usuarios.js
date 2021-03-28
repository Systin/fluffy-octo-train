const conexao = require('../banco-de-dados/conexao');

class Usuario{
    adiciona(usuario) {
        conexao.connect(err => {
            if (err) console.log(err);
            else 
            {
                // Acho melhor fazer apenas uma classe para se conectar e fazer insert, update, e tals
                const collection = conexao.db("teatro").collection("usuario");
                collection.insertOne(usuario, function(err, res) {
                    if (err) throw err;
                    console.log(res.insertedId);
                });
            }
        
        conexao.close();
        });
    }
}
module.exports = new Usuario;
