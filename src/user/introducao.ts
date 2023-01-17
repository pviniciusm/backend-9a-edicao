import { Aluno, Etapa } from "../aluno/aluno";
import {
    Arroz,
    Bebida,
    Produto,
    TipoArroz,
    TipoProduto,
} from "../produto/produto";
import { User } from "./user";

// // Paradigma IMPERATIVO
// let valor1 = 10;
// let valor2 = 8;

// let media = (valor1 + valor2) / 2;
// console.log(media);

// // Paradigma PROCEDURAL
// function calcularMedia(x: number, y: number) {
//     return (x + y) / 2;
// }

// media = calcularMedia(valor1, valor2);
// console.log(media);

// valor2 = 5;
// media = calcularMedia(valor1, valor2);
// console.log(media);

// // Paradigma orientado a objetos
let user1 = new User("us1", "João", 30);
let user99 = new User("us99", "Maria");

// user1.mostarNome();
// //user99.mostarNome();

// user1.ativar();
// user1.mostarNome();

let arroz = new Arroz(7, TipoArroz.Parbolizado);

arroz.tipo = TipoProduto.Alimento;
console.log(arroz.tipo);

let cocaCola = new Bebida("Coca Cola", 5, 2);
// let xicara = new Produto("Xicara", 20, TipoProduto.Bazar);

// arroz.mostrarValor();
// xicara.mostrarValor();
cocaCola.mostrarValor();

// console.log(arroz);
// console.log(cocaCola);
// console.log(xicara);

// function mostraTipoArroz(arroz: Arroz) {
//     console.log(`O tipo do arroz é ${arroz.tipoArroz}`);
// }

// function mostraTipoProduto(produto: Produto) {
//     console.log(`O tipo do produto é ${produto.tipo}`);
// }

// mostraTipoArroz(arroz);
// mostraTipoProduto(xicara);
// mostraTipoProduto(arroz);

// const pedrinho = new Aluno("Pedro", Etapa.Infantil);
// const avaliacao1 = new Avaliacao(10, "Português");

// pedrinho.avaliacao = avaliacao1;

// console.log(avaliacao1);
// console.log(pedrinho);
