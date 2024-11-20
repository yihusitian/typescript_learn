class Pepole {
    private name:string;
    private age:number;
    private readonly id:number = 0;

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }

    getAge(): number {
        return this.age
    }

    setAge(age:number): void {
        this.age = age
    }

    getName(): string {
        return this.name
    }

    setName(name:string): void {
        this.name = name
    }

    getId(): number {
        return this.id
    }

    setId(id:number): void {
        // 无法修改
        // this.id = id
    }
}

let person = new Pepole('John', 25)
person.sayHello()
console.log(person.getAge())
person.setAge(30)
console.log(person.getAge())


//Getters and Setters
class Account {
    // 必须初始化
    private _balance:number = 0;
    // 必须初始化
    private _name:string = '';


    get balance(): number {
        return this._balance
    }

    set balance(value:number) {
        console.log('Setting balance to', value)
        this._balance = value
    }

    get name(): string {
        return this._name
    }

    set name(value:string) {
        console.log('Setting name to', value)
        this._name = value
    }
}

let account = new Account()
account.balance = 1000
account.name = 'John'
console.log(account.balance)
console.log(account.name)

// 静态成员
class MathUtils {
    static PI:number = 3.14159

    static calculateArea(radius:number): number {
        return MathUtils.PI * radius * radius
    }
}

console.log(MathUtils.calculateArea(10))

//抽象类
abstract class Animal11 {
    abstract makeSound(): void

    abstract getName(): string

    move(): void {
        console.log(`${this.getName()} is moving...`)
    }
}

class Dog extends Animal11 {

    private name:string;

    constructor(name:string) {
        super()
        this.name = name
    }

    getName(): string {
        return this.name
    }

    makeSound(): void {
        console.log(`${this.name} says Woof!`)
    }
}

let dog = new Dog('Buddy')
dog.makeSound()
dog.move()


interface Thing {
    name:string 
    description:string
}

class Box implements Thing {
    name:string = 'Box'
    description:string = 'A box'
}

abstract class AbBox implements Thing {
    abstract name:string
    description:string = "An abstract box"
}

class ConcreteBox extends AbBox {
    name:string = 'Concrete Box'
    description: string = 'A concrete box'
}

let concreteBox = new ConcreteBox()
console.log(concreteBox.name)
console.log(concreteBox.description)