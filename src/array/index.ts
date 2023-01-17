import {
    Produto,
    Arroz,
    Bebida,
    TipoProduto,
    TipoArroz,
} from "../produto/produto";

let objectXicara = new Produto("Xicara", 20, TipoProduto.Bazar);

let produtos: Produto[] = [
    new Produto("Cerveja", 8, TipoProduto.Bebida),
    new Arroz(6, TipoArroz.Branco),
    new Produto("Feijão", 5, TipoProduto.Alimento),
    objectXicara,
    new Produto("Xicara", 50, TipoProduto.Bazar),
];

function exemploMapForEach() {
    let copia = produtos.map((item) => {
        item.valor = item.valor + 10;
        return item;
    });

    produtos.forEach((item) => {
        item.valor = item.valor + 10;
    });

    console.log(produtos);
}

function exemploFilter() {
    let bebidas = produtos.filter((item) => {
        if (item.tipo === TipoProduto.Alimento) {
            return true;
        }

        return false;
    });

    function ehBebida(produto: Produto) {
        return produto.tipo === TipoProduto.Bebida;
    }

    bebidas = produtos.filter((item) => ehBebida(item));

    console.log(bebidas);
}

function exemploFindSomeEvery() {
    let xicara = produtos.find((item) => item.nome === "Xicara");

    // let xicara = produtos.filter((item) => {
    //     return item.nome.match(/^Xicara$/);
    // });

    let xicaraIndex = produtos.findIndex((item) => item.nome === "Xicara");

    // produtos.includes(objectXicara);

    console.log(xicara);
    console.log(xicaraIndex);

    // console.log(produtos.some((item) => item.nome === "Pizza"));
    // console.log(produtos.every((item) => item.valor < 100));
}

function exemploAdd() {
    let novosProdutos = [
        new Produto("tomate", 10, TipoProduto.Alimento),
        new Produto("Cebola", 5, TipoProduto.Alimento),
    ];

    produtos.push(...novosProdutos);
    // produtos.unshift(...novosProdutos);

    // produtos = [...novosProdutos, ...produtos];

    produtos = produtos.concat(novosProdutos);

    console.log(produtos);
}

function exemploRemove() {
    // Remove do final
    // let produtoExcluido = produtos.pop();

    // Remove do inicio
    // produtos.shift();

    let xicaraIndex = produtos.findIndex((item) => item.nome === "Xicara");

    if (xicaraIndex >= 0) {
        produtos.splice(xicaraIndex, 1);
    }

    // let produtosExcluidos = produtos.splice(1, 2);

    console.log(produtos);
    // console.log(produtosExcluidos);
}

function exemploReduce() {
    let valor = produtos.reduce((current, item) => {
        return current + item.valor;
    }, 0);

    // let valor: number[] = produtos.reduce((current: number[], item) => {
    //     current.push(item.valor);
    //     return current;
    // }, []);

    //      [ 8, 6,  5,  50, 20 ]
    //   0  8  14  19  69  89

    console.log(produtos);
    console.log(valor);
}

function exemploFor() {
    let somaValores = 0;

    for (let item of produtos) {
        somaValores = somaValores + item.valor;
    }

    console.log(somaValores);
}
