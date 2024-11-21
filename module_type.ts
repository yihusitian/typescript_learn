export interface SystemUser {
    id: number
    name: string
}

export class UserInfo implements SystemUser {
    sex: number = 0
    id: number = 0  
    name: string = ''
}

export type UserRole = 'admin' | 'user' | 'guest'