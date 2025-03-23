"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("./test"));
class Base {
    constructor(name1) {
        this.name1 = name1;
    }
    getName() {
        return this.name1;
    }
}
class Product {
    constructor(id, price, name) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.isAvailable = true;
    }
    getPrice() {
        return this.price;
    }
    getName() {
        return this.name;
    }
    setAvailability(status) {
        this.isAvailable = status;
    }
    getInfo() {
        return `Товар: ${this.name}, Цена: ${this.price}, Доступен: ${this.isAvailable}`;
    }
}
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.base = new Base(name); // Создаем экземпляр Base с параметром name
    }
    get() {
        if (typeof this.email === "string") {
            console.log("email is string");
        }
        else {
            console.log("email is not string");
        }
    }
    getFromBase() {
        return this.base.getName(); // Получаем значение из Base
    }
}
// Создаем экземпляр User
const obj = new User(123, "john@example.com");
// Выводим значения
console.log(obj.name, obj.email); // John john@example.com
obj.get(); // email is string
// Получаем значение из Base
console.log(obj.getFromBase()); // John
console.log(obj.getFromBase()); // John
test_1.default.fn();
