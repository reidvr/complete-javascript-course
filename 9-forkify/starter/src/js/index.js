import Search from './models/Search';

//Global state of the app
// Search object
// Current recipe object
// Shopping list object
// Liked recipes

const state = {};

const controlSearch = async () => {
    // get query from view
    const query = 'pizza';

    if(query){
        //New search object and add to state
        state.search = new Search(query);

        //Prepare UI for results

        //Search for recipes
        await state.search.getResults();
        //Render result on UI
        console.log(state.search.result);
    }
}

document.querySelector(`.search`).addEventListener('submit', e => {
    e.preventDefault();


});



const newSearch = function(event){
    let value = event.target.firstChild.textContent;

}

//search.getResult();
//console.log(search.result);