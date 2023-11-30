export default class Imovel {
    constructor(id, tipo, endereco, finalidade, valor, imagem) {
        this.id = id;
        this.tipo = tipo;
        this.endereco = endereco;
        this.finalidade = finalidade;
        this.imagem = imagem;
        this.valor = valor;
    }
}