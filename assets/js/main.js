function covertListtoTypes(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>` )
}

function pokemonsToHTML(pokemon) {
    return `
    <li class="pokemon">
                <span class="number">${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${covertListtoTypes(pokemon.types.join(''))}
                    </ol>
                    <img src="${pokemon.stripes.other.dream_wrold.front_deafult}" alt="${pokemon.name}">
                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

const offset = 0;
const limit = 11;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

pokeApi.getPokemon().then( (pokemonsLista = []) => {

    pokemonList.innerHTML += pokemonsLista.map(pokemonsToHTML).join('')
})  
.catch( (error) => {console.error(error)})