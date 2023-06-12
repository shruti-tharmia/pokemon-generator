///// get method//////
const fetchPokemonData = async () => {
    const url = `http://localhost:4200/pokemon/`;
    try {
      const data = await fetch(url);
      const res = await data.json();
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const displayPokemon = async () => {

    const pokemon = await fetchPokemonData();
    
    if (!pokemon.message) {
      id = pokemon["id"];
      currentId=pokemon.id;
      const card =
      `<main>
      <div class="main-container">
          <section class="flex-left">
              <img src="${pokemon.url}" id="image" alt="${pokemon.name}" class="image">
          </section>
          <section class="flex-right">
              <section class="data">
                  <h1 id="name" class="dispName">Hi I am, ${pokemon.name}</h1>
                  <h4 id="type">I am of Type ${pokemon.type}</h4>
                  <h4 id="evolutionCycle">I have evolved as ${pokemon.evolutionCycle}</h4>
                  <h4 id="weakness">My Weaknesses are ${pokemon.weakness}</h4>
                  <h4 id="attacks">My Attacks are ${pokemon.attacks}</h4>
              </section>
          </section>
      </div>
      </main>`;
      if(isEmptyObj(pokemon)){
        document.getElementById("main-area").innerHTML = `<h1 id="footerHide">No Pokemons to Display!</h1>`;
        footerHide();
       }else{
      document.getElementById("main-area").innerHTML = card;
       }
    } 
  };
  displayPokemon();


/// check if object is empty ////

function isEmptyObj(obj){
  return Object.keys(obj).length===0;
}
function footerHide() {
    document.getElementById("footer").style.display = "none";
  }


  //// delete ////
url=`http://localhost:4200/pokemon/`;
 async function deleteRequest(){
      const response = await fetch(url+currentId, {
          method: 'DELETE',
      });
      const resData = await response.json();
      console.log(resData)
  }