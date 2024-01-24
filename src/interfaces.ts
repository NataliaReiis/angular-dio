/* Interfaces (types x interface) */
// types mais utitlizados para tipar objetos
//interface quando vai trabalhar com classes
type robot = {
    id: number;
    name: string;
};

interface robot2 {
  readonly id: number;
    name: string;
    sayHello(): string;
}

const bot: robot2 = {
    id: 1,
    name: "mega",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};
console.log(bot)

class Pessoa implements robot2{
    id: number;
    name: string;

    constructor(id: number, name: string ){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return "hello"
    }
}

const p = new Pessoa(1 ,"nat")
console.log(p.sayHello())