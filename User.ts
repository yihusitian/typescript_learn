interface User {
    name: string,
    age: number,
    isActive: boolean,
    readonly id: number
}

interface Admin extends User {
    permissions: string[]
}

const zhangsan: User = {
    name: "张三",
    age: 18,
    isActive: true,
    sex: "male",
    id: 1
}

console.log(zhangsan)


const lisi: Admin = {
    name: "李四",
    age: 20,
    isActive: true,
    id: 2,
    sex: "male",
    permissions: ["read", "write"]
}
console.log(lisi)

//接口可以重复声明
interface User {
    sex: string
}

