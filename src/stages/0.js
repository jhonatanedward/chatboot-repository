const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg, contato) {
  let menu = "CARDÁPIO \n";

  Object.keys(cardapio.menu).forEach((value) => {
    let element = cardapio.menu[value];
    menu += `${value} - ${element.descricao}        R$ ${element.preco} \n`;
  });

  banco.db[user].stage = 1;

  return [
    `Olá ${contato},\nBem vindo(a) ao ChatBot MIMI Acessories,\nPara fazer o pedido basta enviar o código do produto ‼`,
    menu,
  ];
}

exports.execute = execute;
