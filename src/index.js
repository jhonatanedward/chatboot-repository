// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const util = require("./util.js");
const stages = require('./stages.js');
const banco = require('./banco.js');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: true, // for version not multidevice use false.(default: true)
    headless: false
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if(message.isGroupMsg === false)
    {
      let resp = stages.step[getStage(message.from)].obj.execute(
        message.from,
        message.body,
        message.sender.name
      );

      console.log("RESP --> ", resp);

      //Percorre o array para enviar msgs separadas
      resp.forEach( async item =>  {
        await sendMessageUser(message.from, client, item.texto);
      } );

      util.setStageBanco(message.from, resp[0].stage);
    }

    
  });
}

function sendMessageUser(user, client, msg){
  //enviar msg
  client.sendText(user, msg)
  .then((result) => {
    //console.log('Sucesso ao enviar mensagem: ', result);
  })
  .catch((erro) => {
    console.error('Erro ao enviar mensagem: ', erro);
  });
}

function getStage(user) {
  if (banco.db[user]) {
    console.log("Existe o numero no BD", banco.db[user].stage)
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  } else {
    //Se for a primeira vez que entra e contato
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    console.log("Primeira vez que entra em contato", banco.db[user].stage)

    return banco.db[user].stage;
  }
}