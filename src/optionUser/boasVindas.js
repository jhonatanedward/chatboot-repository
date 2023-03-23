const banco = require("../banco");
const infoCliente = require("../informacoesCliente");

function execute(user, msg, contato) {
  //banco.db[user].stage = 1;

  let arrayMsgRetorno = [];
  arrayMsgRetorno.push({stage: 1});

  arrayMsgRetorno.push({texto: `*Olá* ${contato}, Bem vindo(a) ao 🤖 Robô de ${infoCliente.info.NOME_CLIENTE}💎,
  
  1️⃣ - Fazer pedido de um acessório lindo.
  6️⃣ - Falar diretamente ( _*Emilly*_ )
  
  *_Digite a opção desejada._* 
  `});
  return arrayMsgRetorno;
}

exports.execute = execute;
