const menu = require("./menu");
const banco = require("../banco");

function execute(user, msg) {

  console.log("Opção selecionada --> ", msg);

  //Deseja visualizar o cardápio para adicionar novos itens?
  if (msg === "1") {
    
    let arrayMsgRetorno = [];
    arrayMsgRetorno.push({stage: 6});

    let menus = menu.execute(user, msg);
    arrayMsgRetorno.push({texto: menus});

    //Escolher item do menu
    banco.db[user].stage = 6;
    return arrayMsgRetorno;
  }
  
}

exports.execute = execute;
