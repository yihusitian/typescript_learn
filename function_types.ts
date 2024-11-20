//基本函数类型
function add1(a:number, b:number): number {
    return a + b
}

let result = add1(1, 2)
console.log(result)

//箭头函数类型
let add2:(x:number, y?:number) => number = (x, y) => x + (y || 0)

console.log(add2(1, 2))
console.log(add2(1))


//默认参数
let multiply1 = (a:number, b:number = 10): number => a * b

console.log(multiply1(1, 2))
console.log(multiply1(1))

//剩余参数
let add3 = (...rest:number[]): number => {
    let temp:number = rest.reduce((prev:number, curr:number):number => prev + curr, 0)
    return temp
}

console.log(add3(1, 2, 3, 4, 5))

//重载签名
function handleData1(x:string): string
function handleData1(x:number): number

//实现签名
function handleData1(x: number | string): number | string {
    if (typeof x === 'string') {
        return x.toUpperCase()
    } else if (typeof x === 'number') {
        return x * 2
    }
    return 0
}

console.log(handleData1('hello'))
console.log(handleData1(123))

//this类型
interface User111 {
    name: string,
    age: number,
    getName: (this:User111) => string
}

let user111: User111 = {
    name: '张三',
    age: 20,
    getName() {
        return this.name
    }
}

console.log(user111.getName())

//泛型函数
function firstElement<T>(arr:T[]): T {
    return arr[0]
}

console.log(firstElement([]))
console.log(firstElement(['a', 'b', 'c', 'd', 'e']))


function processItems<T extends string | number>(items:T[]): T[] {
    return items.filter(item => item !== undefined)
}

console.log(processItems([1, 2, 3, 4, 5, 6]))
console.log(processItems(['a', 'b', 'c', 'd', 'e']))