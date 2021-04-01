export default class followers {
    constructor(query) {
        this.query = query;
    }

    async selectFollowers() {
        try {
            let follower = await fetch(`https://api.github.com/users/${this.query}/followers`);
            this.followerArr = await follower.json();
        } catch (err) {
            alert(err);
        }
    }
}