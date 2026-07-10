const user = {
    username: "shristi",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        
    }
}
user.welcomemessage()
user.username = "ram"
user.welcomemessage()