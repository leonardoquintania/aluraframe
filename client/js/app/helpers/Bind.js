class Bind {
    //-- Na declaração de função - ...Rest operator (apartir do terceiro parametro ele transforma os parametros em um array)
    //-- Na chamada da função - ...Spread operator
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(model, props, model => view.update(model))

        view.update(model);

        return proxy;
    }
}