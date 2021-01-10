"use strict";
/**
 * UserServiceMySQLImpl: MySQL的实体类，使用这个实现类用来对MySQL数据库进行操作
 */
class UserServiceMySQLImpl {
    add(user) {
        // console.log(`username=${user.getUsername()}, password=${user.getPassword()}，已添加...`);
        // localStorage.setItem('user', JSON.stringify(user)); //存到localStorage中
        console.log('数据已存入mysql数据库。。。');
        return true;
    }
    delete(userId) {
        throw new Error("Method not implemented.");
    }
    update(userId) {
        throw new Error("Method not implemented.");
    }
    get(username, password) {
        throw new Error("Method not implemented.");
    }
}
class UserServiceOracleImpl {
    add(user) {
        console.log('数据已存入oracle数据库。。。');
        return true;
    }
    delete(userId) {
        throw new Error("Method not implemented.");
    }
    update(userId) {
        throw new Error("Method not implemented.");
    }
    get(username, password) {
        throw new Error("Method not implemented.");
    }
}
/**
 * User: 用户表对应的用户类
 */
class User {
    constructor(userId, username, password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
    // getter和setter
    getUserId() {
        return this.userId;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
}
let user1 = new User(1, 'lisi', "12345");
let user2 = new User(2, 'wangwu', "456789");
let userService = new UserServiceMySQLImpl();
userService.add(user1);
// userService.add(user2);
