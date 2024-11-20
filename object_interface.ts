interface NewUser {
    name: string,
    age: number,
    readonly id: number,
    fun111: (params: string) => string,
    sayHello: () => void
}

let user_1: NewUser = {
    name: "张三",
    age: 18,
    id: 1,
    fun111: (params: string) => {
        console.log('params', params)
        return params
    },
    sayHello: () => {
        console.log('hello')
    }
}

//这里不可修改
// user_1.id = 2
console.log(user_1)
user_1.sayHello()

user_1.fun111("123")

//这个接口定义了函数类型
interface UserFunc {
    (params: string | number): string
}

//如上接口等同于如下type定义的UserFunc2
type UserFunc2 = (params: string | number) => string

let user_func: UserFunc = (params: string | number): string => {
    console.log('params', params)
    return String(params)
}

user_func("123")
user_func(123)

let user_func2: UserFunc2 = (params: string | number): string => {
    console.log('params', params)
    return String(params)
}

user_func2("123")
user_func2(123)


//函数接口的实际用处
interface MathFunc {
    (a: number, b: number): number
}

let add: MathFunc = (a: number, b: number): number => {
    return a + b
}

add(1, 2)

let sub: MathFunc = (a: number, b: number): number => {
    return a - b
}

sub(1, 2)

let mul: MathFunc = (a: number, b: number): number => {
    return a * b
}

mul(1, 2)

let div: MathFunc = (a: number, b: number): number => {
    return a / b
}

div(1, 2)


//定义一个事件处理器的类型
interface EventHandler {
    (event: string, data: any): void
}

let handleClick: EventHandler = (event: string, data: any): void => {
    console.log('event', event)
    console.log('data', data)
}

handleClick('click', 'data')

