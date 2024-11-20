//类型守卫
interface Bird {
    fly(): void
    layEggs(): void
}

interface Fish {
    swim(): void
    layEggs(): void 
}

function isBird(pet: Bird | Fish): pet is Bird {
    return (pet as Bird).fly !== undefined
}

let pet: Bird = {
    fly: () => console.log('fly'),
    layEggs: () => console.log('layEggs')
}

let pet2: Fish = {
    swim: () => console.log('swim'),
    layEggs: () => console.log('layEggs')
}

if (isBird(pet)) {
    pet.fly()
}

if (isBird(pet2)) {
    pet2.fly()
}

//映射类型
type ReadonlyType<T> = {
    readonly [P in keyof T]?: T[P]
}

class PUser {
    name: string = '张三'
}

type readonlyUser = ReadonlyType<PUser>

let user1111: readonlyUser = new PUser()
console.log(user1111)
// user1111.name = '李四'

//条件类型
type TypeName<T> = 
    T extends string ? 'string' :
    T extends number ? 'number' :   
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'function' : 'object'

type T1 = TypeName<string>
type T2 = TypeName<number>
type T3 = TypeName<boolean>
type T4 = TypeName<undefined>
type T5 = TypeName<Function>
type T6 = TypeName<object>

let t1: T1 = 'string'
let t2: T2 = 'number'
let t3: T3 = 'boolean'
let t4: T4 = 'undefined'
let t5: T5 = 'function'
let t6: T6 = 'object'

console.log(t1, t2, t3, t4, t5, t6)

//实用工具

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'description'>

let todo: TodoPreview = {
    title: 'Clean the house',
    description: 'Remove the trash'
}

console.log(todo)

type TodoInfo = Omit<Todo, 'completed'>

let todoInfo: TodoInfo = {
    title: 'Clean the house',
    description: 'Remove the trash'
}

console.log(todoInfo)

type PageInfo = {
    title: string
    url: string
}

type Pages = Record<string, PageInfo>

let pages: Pages = {
    'home': {title: 'Home', url: 'http://localhost:3000'},
}

console.log(pages)

function getData() {
    return {id: 1, name: '张三', age: 10}
}

//获取函数的返回类型，即定义一个跟方法返回值一样的类型
type DataType = ReturnType<typeof getData>
let t0: DataType = {id: 100, name: '里斯', age: 10}
console.log(t0)


interface BaseResponse {
    code: number
    message: string
}

interface SuccessResponse<T> extends BaseResponse {
    data: T
}

interface ErrorResponse extends BaseResponse {
    error: string
}

type ResponseData<T> = SuccessResponse<T> | ErrorResponse

interface UserData {
    id: number
    name: string
}

function handleResponse(response: ResponseData<UserData>) {
    if ('data' in response) {
        console.log(response.data)
    } else {
        console.log(response.error)
    }
}

handleResponse({code: 200, message: '成功', data: {id: 1, name: '张三'}})
handleResponse({code: 400, message: '失败', error: '错误信息'})