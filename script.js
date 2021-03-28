import * as searchView from './views/searchView.js';
import Search from './models/Search.js';
import {
    domElements
} from './views/base.js';

let state = {};

domElements.searchButton.addEventListener('click', () => {
    state.currentUser = new Search(searchView.getInput());
    console.log(state);
    userController();
})

async function userController() {
    try {
       let err = await state.currentUser.getUser();
       if(err==="User not found"){
           throw "User not found";
       }
        location.href = '#section2';
        searchView.clearInput();
        if (state.prev) {
            searchView.toggleVisibility(state.prev);
        }

        state.prev = state.currentUser.userDetails.id;

        searchView.userImagesMarkup(state.currentUser.userDetails);
        searchView.createCard(state.currentUser.userDetails);
    } catch (err) {
        console.log(err);
    }
}


document.querySelector('.userImages').addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.className === "fig") {
        let currentVisible=document.querySelector(`.cardContainer.${state.prev}`);
        currentVisible.classList.toggle('hidden');

        let parentClass=event.target.parentNode.className;
        state.prev = parentClass;
        let parentNode =
        document.querySelector(`.cardContainer.${parentClass}`);
        parentNode.classList.toggle('hidden');
    }
})