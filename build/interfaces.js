"use strict";
const bot = {
    id: 1,
    name: "mega",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "hello";
    }
}
const p = new Pessoa(1, "nat");
console.log(p.sayHello());
