//1.基本的计算属性
type Direction = "up" | "down" | "left" | "right"
type DirectionMap = {
    //默认所有字段都必填
    [key in Direction]: string
}

let directionMap: DirectionMap = {
    up: "向上",
    down: "向下",
    left: "向左",
    right: "向右"
}
console.log(directionMap)

//2.创建一个所有字段都是可选的类型
type PartialDirectionMap = {
    [key in Direction]?: string
}

let partialDirectionMap: PartialDirectionMap = {
    up: "向上"
}
console.log(partialDirectionMap)

//3.创建一个所有字段都是只读的类型
type UserFields = "name" | "age" | "isActive"
type ReadonlyUserFields = "id" | "sex" | "permissions"
type Users = {
    readonly [key in ReadonlyUserFields]?: number;
} & {
    [key in UserFields]: string;
}

let user: Users = {
    id: 100,
    sex: 1,
    name: "张三",
    age: "18",
    isActive: "true"
}
console.log(user)