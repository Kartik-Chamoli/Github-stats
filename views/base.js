export let domElements = {
    searchBox: document.querySelector('.searchBar input'),
    searchButton: document.querySelector('.search'),
    userStats: document.querySelector('.userStats'),
    userImages:document.querySelector('.userImages'),
    followers:document.querySelector('.followersContainer'),
    following:document.querySelector('.followingContainer'),
}

export let dynamicEle = {
    cardEle(id) {
        return {
            leftSide: document.querySelector(`.${id} .left-side`),
            socials: document.querySelector(`.${id} .socials`),
            location: document.querySelector(`.${id} .location`),
            rightContainer:document.querySelector(`.${id} .rightContainer`),
        }
    }
}

export let followersEle = {
    followEle(id){
        return document.querySelector(`.followers.${id}`);
    }
}

export let followingEle = {
    followingEle(id){
        return document.querySelector(`.following.${id}`);
    }
}