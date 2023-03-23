var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./optionUser/boasVindas"),
  },
  1: {
    descricao: "Opções Selecionadas",
    obj: require("./optionUser/opcaoSelecionada"),
  }
};

exports.step = stages;
