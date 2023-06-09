const { model, Schema } = require("mongoose");

const Produto = model("produto", new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    desconto: {
        type: Number,
        required: true
    },
    dataDesconto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    imagemProduto: {
        type: String,
    },
}))

module.exports = Produto;