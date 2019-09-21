class DateHelper {
    
    constructor(){
        throw new Error("Esta classe não pode ser instanciada")
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto){
        //if (!/\d{4}-\d{2}-\d{2}/.test) //validação fail fast
        if (!/^\d{4}-\d{2}-\d{2}$/.test) //-- validação fail fast - O ˆ indica "começando com " e o $ "terminando com".
            throw new Error("Deve ser informado no formato yyyy-mm-dd");

        return new Date (...texto.split('-').map((item, indice) => item - (indice % 2) )); //-- com arrow function
    }

  


}