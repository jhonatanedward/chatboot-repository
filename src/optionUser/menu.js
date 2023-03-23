const cardapio = require("../cardapio");

function execute(user, msg) {

  let menu = "⚠️ *ATENÇÃO* ⚠️ \n"; 
  menu += "👍 *Adicione um item ao seu pedido,*\n *digite uma das opções abaixo:* \n\n";
  menu += "🟢 *MENU DE OPÇÕES* 🟢 \n\n";

    Object.keys(cardapio.menu).forEach((value) => {
      let element = cardapio.menu[value];
      menu += `${value} - ${element.descricao} - R$ ${element.preco} \n`;
    });
    
    return menu;
}

exports.execute = execute;
