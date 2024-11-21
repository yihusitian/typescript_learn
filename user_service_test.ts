import { UserService } from './user_service'

//这里可以直接通过user_service 导入module_type模块中的类型，因为user_service 中已经重新导出了module_type模块
import type { SystemUser, UserRole } from './user_service'

let userService = new UserService()
userService.addUser({
    id: 1,
    name: '张三'
}, 'admin')

