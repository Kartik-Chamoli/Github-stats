export default class Search{

    constructor(query){
        this.query = query;
    }

    async getUser(){
        try{
        let user = await fetch(`https://api.github.com/users/${this.query}`);
        this.userDetails = await user.json();
        if(this.userDetails.message){
            if(this.userDetails.message.split(" ")[0]==="API")
            throw 'API rate limit exceeded,try again after some time';
            else
            throw 'User not found';
        }
        this.userDetails.id = 'g'+this.userDetails.id;
        this.userDetails.created_at = this.userDetails.created_at.split("T")[0];
        }
        catch(err){
            alert(err);
            throw err;
        } 
    }

}