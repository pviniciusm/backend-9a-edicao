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

export class Produto {
    public nome: string;
    public valor: number;
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

export interface Item {
    estoque: number;
}

// Arroz => sub-classe     (classe filha)
// Produto => super-classe (classe mãe)
// Arroz É um produto
export class Arroz extends Produto implements Item {
    public tipoArroz!: TipoArroz;
    estoque!: number;

    constructor(valor: number, tipoArroz: TipoArroz) {
        super("Arroz", valor, TipoProduto.Alimento);

        this.tipoArroz = tipoArroz;
    }

    public mostrarValor() {
        console.log("O valor é " + this.valor);
        console.log(this.valor);
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
