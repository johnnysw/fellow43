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

export default User;