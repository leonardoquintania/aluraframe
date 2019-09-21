class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
        //this._armadilha = armadilha;
        //this._contexto = contexto;
    }

    adiciona(negociacao) {
        this._negociacoes = [].concat(this._negociacoes,negociacao)
        //this._negociacoes.push(negociacao);
        //this._armadilha(this);
        //Reflect.apply(this._armadilha,this._contexto,[this]);
    }

    get negociacoes() {
        //return this._negociacoes;
        return [].concat(this._negociacoes); //-- Programação defensiva
        //-- Cria uma copia da lista para não acontecer do usuario alterar os dados
        //-- da negociação, apenas através do metodo adiciona será possivel.
    }

    esvazia(){
        this._negociacoes = [];
        //this._armadilha(this);
        //Reflect.apply(this._armadilha,this._contexto,[this]);
    }

    get volumeTotal(){
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }

}