//1.默认是全局作用域
let aaa = 100

//2.块作用域
{
    let bbb = 200
}


// console.log(bbb)

//3.函数作用域
function test() {
    let ccc = 300
}

// console.log(ccc)

//4.函数参数作用域
function test2(a:number) {
    let b = 200
}

// console.log(a)


//5.类作用域
class Test {
    a = 100
}

console.log(new Test().a)


class Test2 {
    private a:number = 100
    //protected 变量 可以在声明的类内部和子类中访问
    protected b:number = 200
    public c:number = 300

    // 默认是public
    d:number = 400
    constructor() {
        console.log(this.a)
        console.log(this.b)
        console.log(this.c)
    }

    private getA() {
        console.log('method2')
        return this.a
    }
}

let test22 = new Test2()
console.log(test22.d)
console.log(test22.c)
// 无法访问类中的protected属性
// console.log(test22.b)


class Test3 extends Test2 {

    method1() {
        //无法访问父类的私有变量
        // console.log(this.a)
        console.log(this.b)
        console.log(this.c)
        console.log(this.d)
        // 无法访问父类的私有方法
        // console.log(this.getA())
    }


}