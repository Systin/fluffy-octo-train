const custom = require('./config/customExpress');
const conexao = require('./banco-de-dados/conexao');

conexao.connect(err => {
    if (err) console.log(err);
    else {
        console.log('Tudo okay!');
        const collection = conexao.db("teatro").collection("usuario");
        collection.findOne({}, function(erro, result) {
            if (erro) console.log (erro);
            console.log(result);
            
            app = custom();
            app.listen(3000, ()=> console.log('Servidor online'));
          });
    }
  });
conexao.close();
