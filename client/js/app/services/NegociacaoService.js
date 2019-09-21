class NegociacaoService {

    constructor(){
        this.http = new HttpService();
    }


    //-- Parametro cb - callback
    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            this.http
                .get('/negociacoes/semana')
                .then(negociacoes=>{
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro=>{
                    console.log(erro);
                    reject("Não foi possivel obter as negociações da semana.");
                })
        });
    }

    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {
            this.http
                .get('/negociacoes/anterior')
                .then(negociacoes=>{
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro=>{
                    console.log(erro);
                    reject("Não foi possivel obter as negociações da semana.");
                })
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            this.http
                .get('/negociacoes/retrasada')
                .then(negociacoes=>{
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro=>{
                    console.log(erro);
                    reject("Não foi possivel obter as negociações da semana.");
                })
        });
    }
    /*
    //-- Parametro cb - callback
    obterNegociacoesDaSemanaAnterior(){
        
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', '/negociacoes/anterior');

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log("Obtendo as requisições do servidor.");

                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        console.log(xhr.responseText);
                        reject("Não foi possivel obter as negociações da semana anterior.");
                    }
                }

            }
            xhr.send();
        });
    }
    
    //-- Parametro cb - callback
    obterNegociacoesDaSemanaRetrasada(){
        return new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', '/negociacoes/retrasada');
    
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log("Obtendo as requisições do servidor.");
    
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
    
                    } else {
                        console.log(xhr.responseText);
                        reject("Não foi possivel obter as negociações da semana retrasada.");
                    }
                }
    
            }
            xhr.send();

        });
    }
    */
}
