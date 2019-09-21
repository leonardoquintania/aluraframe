class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        //  this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model));
        //this._negociacoesView.update(this._listaNegociacoes);
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia');

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(evento) {
        event.preventDefault();

        console.log(typeof (this._inputData.value));
        //let helper = new DateHelper(); //-- Não precisa ser instanciado por causa dos metodos estaticos
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = "Negociação adicionada com sucesso";

        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    importaNegociacoes() {
        let service = new NegociacaoService();
        //-- Terceira criação
        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()]
        ).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado,array)=> arrayAchatado.concat(array) ,[])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso";
        })
        .catch(erro => this._mensagem.texto = erro);





        //Segunda criação
        /*
        service.obterNegociacoesDaSemana()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = "Negociações da semana obtida com sucesso!";
            })
            .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaAnterior()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = "Negociações da semana obtida com sucesso!";
            })
            .catch(erro => this._mensagem.texto = erro);
        
        service.obterNegociacoesDaSemanaRetrasada()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = "Negociações da semana obtida com sucesso!";
            })
            .catch(erro => this._mensagem.texto = erro);


        //-- Primeira criação
        service.obterNegociacoesDaSemana((erro,negociacoes) => {
            if(erro){
                this._mensagem.texto = erro;
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            
            service.obterNegociacoesDaSemanaAnterior((erro,negociacoes) => {
                if(erro){
                    this._mensagem.texto = erro;
                    return;
                }
    
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                
                service.obterNegociacoesDaSemanaRetrasada((erro,negociacoes) => {
                    if(erro){
                        this._mensagem.texto = erro;
                        return;
                    }
        
                    negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem = "Negociações importadas com sucesso";
                });
            });
        });*/



    }


    apaga() {
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = "Negociações apagadas com sucesso";

    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

}