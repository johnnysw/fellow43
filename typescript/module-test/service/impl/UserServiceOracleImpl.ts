import User from '../../model/User.js'
import UserService from '../UserService.js'

class UserServiceOracleImpl implements UserService{
    add(user: User): boolean {
        console.log('数据已存入oracle数据库。。。');
        return true;
    }
    delete(userId: number): boolean {
        throw new Error("Method not implemented.");
    }
    update(userId: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(username: string, password: string): User {
        throw new Error("Method not implemented.");
    }
    
}

export default UserServiceOracleImpl;
