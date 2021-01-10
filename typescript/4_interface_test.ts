/* 
    演示一段用来进行数据库访问操作的案例
    对于数据库经常用以下操作（CRUD）：
    1. add：添加记录
    2. delete: 删除记录
    3. update: 修改记录
    4. get: 查询记录
*/
/**
 * UserService: 针对数据库中user表中的业务操作
 */
interface UserService{
    add(user: User): boolean;
    delete(userId: number): boolean;
    update(userId: number): boolean;
    get(username: string, password: string): User;
}
/**
 * UserServiceMySQLImpl: MySQL的实体类，使用这个实现类用来对MySQL数据库进行操作
 */
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

/**
 * User: 用户表对应的用户类
 */
class User{
    private userId: number;
    private username: string;
    private password: string;

    constructor(userId: number, username: string, password: string){
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    // getter和setter
    public getUserId(){
        return this.userId;
    }
    public setUserId(userId: number){
        this.userId = userId;
    }
    public getUsername(){
        return this.username;
    }
    public setUsername(username: string){
        this.username = username;
    }
    public getPassword(){
        return this.password;
    }
    public setPassword(password: string){
        this.password = password;
    }
}

let user1 = new User(1, 'lisi', "12345");
let user2 = new User(2, 'wangwu', "456789");

let userService = new UserServiceMySQLImpl();
userService.add(user1);
// userService.add(user2);
