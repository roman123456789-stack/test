import Test from "./test"
class Base<Some> {
    constructor(public name1: Some) {}

    getName(): Some {
        return this.name1;
    }
}

class Product<Price extends number, Name extends string> {
    private id: number;
    private price: Price;
    private name: Name;
    private isAvailable: boolean;

    constructor(id: number, price: Price, name: Name) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.isAvailable = true;
    }

    getPrice(): Price {
        return this.price;
    }

    getName(): Name {
        return this.name;
    }

    setAvailability(status: boolean): void {
        this.isAvailable = status;
    }

    getInfo(): string {
        return `Товар: ${this.name}, Цена: ${this.price}, Доступен: ${this.isAvailable}`;
    }
}

class User<T, T1> {
    private base: Base<T>; // Поле для хранения экземпляра Base

    constructor(public name: T, public email: T1) {
        this.base = new Base(name); // Создаем экземпляр Base с параметром name
    }

    get(): void {
        if (typeof this.email === "string") {
            console.log("email is string");
        } else {
            console.log("email is not string");
        }
    }

    getFromBase(): T {
        return this.base.getName(); // Получаем значение из Base
    }
}

// Создаем экземпляр User
const obj: User<number, string> = new User(123, "john@example.com");

// Выводим значения
console.log(obj.name, obj.email); // John john@example.com
obj.get(); // email is string

// Получаем значение из Base
console.log(obj.getFromBase()); // John
console.log(obj.getFromBase()); // John
Test.fn();
