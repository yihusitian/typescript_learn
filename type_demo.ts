type Point = {
    x: number,
    y: number
}

let point: Point = {
    x: 10,
    y: 20   
}

console.log(point)

//联合类型，｜满足其一即可，& 两种都得满足
type ID = number | string
let id: ID = 123
let id2: ID = "123"
console.log(id)
console.log(id2)

type Animal = {
    name: string
}

type Bear = {
    legs: number
}

type AnimalBear = Animal & Bear
type BearAnimal = Bear | Animal

let bearAnimal: BearAnimal = {
    name: "bear",
}
let bearAnimal2: BearAnimal = {
    legs: 4
}

console.log(bearAnimal)
console.log(bearAnimal2)

let animalBear: AnimalBear = {
    name: "animalbear",
    legs: 4
}
console.log(animalBear)

//字面量类型
type Name = "张三" | "李四"
let name1: Name = "张三"
// let name2: Name = "李四1" //不是字面量类型中指定的，就会报错
console.log(name1)
// console.log(name2)