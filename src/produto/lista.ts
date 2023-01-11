let list: number[] = [1, 2, 3, 54, 6, 100, 5];
let listText: Array<String> = ["ola", "mundo"];
let tupla: any[] = [1, "teste", { nome: "abc" }];

let copiaLista = [...list, ...listText];
copiaLista[0] = 9999;

let meuObjeto = {
    nome: "abc",
    idade: 20,
};

let copiaObjeto = {
    ...meuObjeto,
};

console.log(list);
console.log(copiaLista);
