import {domElements,dynamicEle} from './base.js';


export function userImagesMarkup(user){
    let markup = `<figure class="${user.id}">
    <img class="fig" src="${user.avatar_url}" alt="User Image">
      <figcaption class="fig">${user.name}</figcaption>
  </figure>`

  domElements.userImages.insertAdjacentHTML('beforeend',markup);
}


export function createCard(user){
    let markup =`<div class="cardContainer ${user.id}">
    <div class="left-side">
        <img src="${user.avatar_url}" alt="">
        <h2>${user.login}</h2>
        <h2>${user.name}</h2>
    </div>
    <div class="rightContainer">
        <div class="right-side">
            <span>Followers:<br><span class="rVal">${user.followers}</span></span>
            <span>Following:<br><span class="rVal">${user.following}</span></span>
            <span>Public repos:<br><span class="rVal">${user.public_repos}</span></span>
            <span>Public gists:<br><span class="rVal">${user.public_gists}</span></span>
        </div>
        <div class="socials">
            <span>Socials :</span>
            <a href="${user.html_url}"><span class="iconify" data-inline="false"
                    data-icon="akar-icons:github-fill" style="color: #5700C5;"></span></a>
        </div>
        <div class="location">
            
        </div>

        <div class="creation">
            <span class="create">Created at: <span class="rVal">${user.created_at}</span></span>
        </div>
    </div>
</div>`

    domElements.userStats.insertAdjacentHTML('beforeend',markup);
    cardMarkup(user);
}

function cardMarkup(user){
    let newElements = dynamicEle.cardEle(user.id);

    if(user.company){
        newElements.leftSide.insertAdjacentHTML('beforeend','        <span>Company: Hcl Technologies</span>');
    }
    if(user.twitter_username){
        newElements.socials.insertAdjacentHTML('beforeend',` <a href="https://www.twitter.com/${user.twitter_username}"><span class="iconify" data-inline="false"
        data-icon="ant-design:twitter-circle-filled" style="color: #5700C5;"></span></a>`);
    }
    if(user.blog){
        newElements.socials.insertAdjacentHTML('beforeend',`
        <a href=${user.blog}> <span class="iconify" data-inline="false" data-icon="whh:website"
        style="color: #5700C5;"></span></a>`);
    }
    if(user.location){
        newElements.location.insertAdjacentHTML('beforeend',`
        <span class="loc">Location: <span class="rVal">${user.location}</span></span>
        `);
    }
    if(user.bio){
        newElements.rightContainer.insertAdjacentHTML('beforeend',`
        <div class="quote">
            <span class="rVal">${user.bio}</span>
        </div>`);
    }
}

export function toggleVisibility(hideId){
    let ele=document.querySelector(`.cardContainer.${hideId}`);     
    ele.classList.toggle('hidden');
}

export function clearDom(){
    domElements.userStats.innerHTML="";
}

export function getInput(){
    return domElements.searchBox.value;
}

export function clearInput(){
    domElements.searchBox.value = "";
}