import User from './model/User.js'
import UserServiceMySQLImpl from './service/impl/UserServiceMySQLImpl.js'
import UserServiceOracleImpl from './service/impl/UserServiceOracleImpl.js'


let user1 = new User(1, 'lisi', "12345");
let user2 = new User(2, 'wangwu', "456789");

let userService = new UserServiceOracleImpl();
userService.add(user1);