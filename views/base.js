export let domElements = {
    searchBox: document.querySelector('.searchBar input'),
    searchButton: document.querySelector('.search'),
    userStats: document.querySelector('.userStats'),
    userImages:document.querySelector('.userImages'),
}

export let dynamicEle = {
    cardEle(id) {
        return {
            leftSide: document.querySelector(`.${id} .left-side`),
            socials: document.querySelector(`.${id} .socials`),
            location: document.querySelector(`.${id} .location`),
            rightContainer:document.querySelector(`.${id} .rightContainer`),
            cardContainer:document.querySelector
        }
    }
}