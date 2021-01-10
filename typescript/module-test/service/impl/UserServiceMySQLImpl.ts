import User from '../../model/User.js'
import UserService from '../UserService.js'

class UserServiceMySQLImpl implements UserService{
    add(user: User): boolean {
        // console.log(`username=${user.getUsername()}, password=${user.getPassword()}，已添加...`);
        // localStorage.setItem('user', JSON.stringify(user)); //存到localStorage中
        console.log('数据已存入mysql数据库。。。');
        
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

export default UserServiceMySQLImpl;