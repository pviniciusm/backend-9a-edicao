export enum TipoProduto {
    Alimento = "A",
    Bebida = "B",
    Bazar = "S",
}

export enum TipoArroz {
    Integral = "I",
    Parbolizado = "P",
    Branco = "B",
}

export abstract class Produto {
    private nome: string;
    protected valor: number;
    public tipo: TipoProduto;

    constructor(nome: string, valor: number, tipo: TipoProduto) {
        this.nome = nome;
        this.valor = valor;
        this.tipo = tipo;
    }

    public mostrarValor() {
        console.log(this.valor);
    }
}

// Arroz => sub-classe     (classe filha)
// Produto => super-classe (classe mãe)
// Arroz É um produto
export class Arroz extends Produto {
    public tipoArroz!: TipoArroz;

    constructor(valor: number, tipoArroz: TipoArroz) {
        super("Arroz", valor, TipoProduto.Alimento);

        this.tipoArroz = tipoArroz;
    }

    public mostrarValor() {
        console.log("O valor é " + this.valor);
    }
}

// Bebida É um produto
export class Bebida extends Produto {
    litros: number;

    constructor(nome: string, valor: number, litros: number) {
        super(nome, valor, TipoProduto.Bebida);

        this.litros = litros;
    }

    public mostrarValor() {
        //super.mostrarValor();

        console.log("Essa bebida custa " + this.valor + " reais");
    }
}

// Pilares da POO:
// Abstração

// Herança

// Encapsulamento

// Polimorfismo

// Composição
