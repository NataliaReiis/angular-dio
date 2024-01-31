type heroi = {
    name:string;
    vulgo: string;
}

function printaObjeto(pessoa: heroi){
    console.log(pessoa);
}

printaObjeto({
    name : "nat",
    vulgo: "reis",
})

console.log("ola mundo")

/* Objetos */
type produtoLoja = {
    name: string;
    value: number;
};

let meuProduto : produtoLoja = {
    name: "natalia",
    value: 89.99,
};

/* Arrays */

let dados: string[] = ["nat", "ola"];
let dados2: Array<string> = ["nat", "ola"];

/* arrays multi types */
let infos: (string | number)[] = ["nat", "02"];

/* Tuplas = respeita a ordem */
let boleto : [string, number, number] = ["agua", 8.58, 154514485]

/* arrays métodos = iguais ao do js */

/* Datas */
let aniversario:Date = new Date("2024-23-01 19:55");
console.log(aniversario.toString())