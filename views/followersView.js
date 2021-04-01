import {
    domElements,
    followersEle,
    followingEle
} from "./base.js";

export function followerMarkup(follower, currentUserId) {
    let markup = `
    <figure class="${follower.id}">
    <img class="fig" src="${follower.avatar_url}" alt="User Image">
      <figcaption class="fig">${follower.login}</figcaption>
  </figure>
  `
    
   followersEle.followEle(currentUserId).insertAdjacentHTML('beforeend', markup);
}

export function followerContainer(currentUserId) {
    let followContainer = `<div class="followers ${currentUserId}">
    </div>
    `
    domElements.followers.insertAdjacentHTML('beforeend', followContainer);
}

export function followingMarkup(following, currentUserId) {
    let markup = `
    <figure class="${following.id}">
    <img class="fig" src="${following.avatar_url}" alt="User Image">
      <figcaption class="fig">${following.login}</figcaption>
  </figure>
  `

    followingEle.followingEle(currentUserId).insertAdjacentHTML('beforeend', markup);
}

export function followingContainer(currentUserId) {
    let followingContainer = `<div class="following ${currentUserId}">
    </div>
    `
    domElements.following.insertAdjacentHTML('beforeend', followingContainer);
}