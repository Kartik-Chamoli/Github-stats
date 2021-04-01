import * as searchView from './views/searchView.js';
import Search from './models/Search.js';
import followers from './models/followers.js';
import following from './models/following.js';
import {domElements} from './views/base.js';
import * as followersView from './views/followersView.js';

let state = {
    userList:[],
};

domElements.searchButton.addEventListener('click', () => {
    let queryVal = searchView.getInput();
    try{
        if(state.userList.includes(queryVal))
        throw 'The user is already in the list click on his name below';
        else{
            state.userList.push(queryVal);
            state.currentUser = new Search(queryVal);
            userController();
        }
    }
    catch(err){
        alert(err);
        console.log('Err: '+err);
        searchView.clearInput();
    }
})

async function userController() {
    try {
       let err = await state.currentUser.getUser();
       if(err)
       throw err;

        location.href = '#section2';
        searchView.clearInput();
        if (state.prev) {
            searchView.toggleVisibility(state.prev);
        }

        state.prev = state.currentUser.userDetails.id;

        searchView.userImagesMarkup(domElements.userImages,state.currentUser.userDetails);
        searchView.createCard(state.currentUser.userDetails);
        
        followerController();
        followingController();

    } catch (err) {
        console.log('Error: '+err);
    }
}

async function followerController(){
    let follows = new followers(state.currentUser.query);
    await follows.selectFollowers();
   
    followersView.followerContainer(state.currentUser.userDetails.id);

    for(let i=0;i<Math.min(5,follows.followerArr.length);i++){
        followersView.followerMarkup(follows.followerArr[i],state.currentUser.userDetails.id);
    }
}

async function followingController(){
    let followings = new following(state.currentUser.query);
    await followings.selectFollowing();
   
    followersView.followingContainer(state.currentUser.userDetails.id);

    for(let i=0;i<Math.min(5,followings.followingArr.length);i++){
        followersView.followingMarkup(followings.followingArr[i],state.currentUser.userDetails.id);
    }
}


domElements.userImages.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.className === "fig") {
        searchView.toggleVisibility(state.prev);
        
        let parentClass=event.target.parentNode.className;
        state.prev = parentClass;
        
        searchView.toggleVisibility(state.prev);
    }
})

domElements.searchBox.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13)
    domElements.searchButton.click();
})

domElements.clearAll.addEventListener('click',(event)=>{
    event.stopPropagation();
    document.querySelectorAll('.cardContainer').forEach(item=>{
        item.remove(item);
    })

    document.querySelectorAll('.followers').forEach(item=>{
        item.remove(item);
    })
    
    domElements.userImages.innerHTML="";

    document.querySelectorAll('.following').forEach(item=>{
        item.remove(item);
    })

    state={};
    state.userList=[];
})