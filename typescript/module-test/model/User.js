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
export default User;
