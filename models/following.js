export default class followers {
    constructor(query) {
        this.query = query;
    }

    async selectFollowing() {
        try {
            let following = await fetch(`https://api.github.com/users/${this.query}/following`);
            this.followingArr = await following.json();
        } catch (err) {
            alert(err);
        }
    }
}