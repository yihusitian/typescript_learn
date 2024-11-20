// //简单实用类装饰器
// function logger(target: any) {
//     console.log('类被创建了:', target)
// }

// //带参数的类装饰器
// function component(options: {selector: string}) {
//     return function(target: any) {
//         console.log('类被创建了1:', target)
//         console.log('选择器是:', options.selector)
//     }
// }

// @logger
// @component({selector: '#my-component'})
// class Person {
//     constructor() {
//         console.log('Person 类被实例化')
//     }

//     sayHello() {
//         console.log('Hello, world!')
//     }
// }

// let person1 = new Person()
// person1.sayHello()

// 方法装饰器
// function log(target: any, propertyKey: string , descriptor: PropertyDescriptor) {
//     if (!descriptor) {
//         return
//     }
//     // 保存原始方法
//     const originalMethod = descriptor.value;

//     // 修改方法的行为
//     descriptor.value = function(...args: any[]) {
//         console.log(`调用方法 ${propertyKey} 参数:`, args);
//         const result = originalMethod.apply(this, args);
//         console.log(`方法 ${propertyKey} 返回:`, result);
//         return result;
//     };
// }

// class Calculator {
//     @log
//     add(a: number, b: number) {
//         return a + b;
//     }
// }

// const calc = new Calculator();
// calc.add(1, 2); // 会输出调用信息

// //属性装饰器
// function validateProperty(target: any, propertyKey: string) {
//     let value: string;
//     const getter = function() {
//         console.log(`获取属性 ${propertyKey} 的值:`, value)
//         return value
//     }

//     const setter = function(newValue: string) {
//         console.log(`设置属性 ${propertyKey} 的值:`, newValue)
//         if (newValue.length < 3) {
//             throw new Error("值的长度不能小于3")
//         }
//         value = newValue
//     }

//     Object.defineProperty(target, propertyKey, {
//         get: getter,
//         set: setter
//     });
// }

// class UserTest {
//     @validateProperty
//     name: string = 'default'
// }

// let userTest = new UserTest()
// userTest.name = 'abc'
// console.log(userTest.name)

interface ValidationRule {
    parameterIndex: number;
    validate: (value: any) => boolean;
    message: string;
}

//参数装饰器
function required(message: string) {
    return function (target: any, propertyKey: string, parameterIndex: number) {
        console.log(`参数装饰器: ${propertyKey} 的第 ${parameterIndex} 个参数被装饰`)
        const validationRules: ValidationRule[] = target[`${propertyKey}ValidationRules`] || [];
        validationRules.push({
            parameterIndex,
            validate: (value: any) => value !== undefined && value !== '',
            message
        })
        target[`${propertyKey}ValidationRules`] = validationRules
        // 如果方法还没有被装饰，添加验证逻辑
        if (!target[`${propertyKey}Original`]) {
            const originalMethod = target[propertyKey];
            target[`${propertyKey}Original`] = originalMethod;
            
            target[propertyKey] = function(...args: any[]) {
                const rules: ValidationRule[] = validationRules || [];
                console.log('rules', rules)
                // 执行所有验证规则
                rules.forEach((rule: ValidationRule) => {
                    if (!rule.validate(args[rule.parameterIndex])) {
                        throw new Error(`参数 ${rule.parameterIndex}: ${rule.message}`);
                    }
                });
                
                // 调用原始方法
                return originalMethod.apply(this, args);
            };
        }
    }
}




class UserService {
    login(@required('用户名不能为空') username: string, @required('密码不能为空') password: string) {
        console.log(`登录用户: ${username}, 密码: ${password}`)
    }   
}

let userService = new UserService()
userService.login('admin', '')