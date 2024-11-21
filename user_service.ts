import type { SystemUser, UserRole, UserInfo } from "./module_type";


//如果用import type 只导入类型，就不能创建实例
// let userInfo: UserInfo = new UserInfo()
//用作类型是可以的

/**
 * 
 * 为什么要使用 import type？
    性能优化
    仅导入类型可以在编译后完全删除
    减小最终代码的体积
    明确意图
    清楚地表明这个导入只用于类型检查
    提高代码可读性
    避免循环依赖
    帮助解决一些循环依赖的问题
    因为类型导入不会导致实际的代码依赖
    类型安全
    防止意外地将类型用作值
    在编译时就能发现错误
    简单记忆：
    普通 import：既可以用作类型，也可以用作值（创建实例、调用方法等）
    import type：只能用作类型，不能用作值（不能创建实例、调用方法）
 */
let userInfo: UserInfo = {
    sex: 0,
    id: 0,
    name: ''
}

export class UserService {
    private users: SystemUser[] = []

    addUser(user: SystemUser, role: UserRole) {
        this.users.push({
            ...user
       })
    }
}

//重新导出，这样实用类，只需要导入user_service 就可以使用user_service中导入的module_type模块
export * from './module_type'