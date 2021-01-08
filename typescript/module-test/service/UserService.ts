import User from '../model/User.js'

interface UserService{
    add(user: User): boolean;
    delete(userId: number): boolean;
    update(userId: number): boolean;
    get(username: string, password: string): User;
}

export default UserService;