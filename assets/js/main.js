
function pokemonsToHTML(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    
    
    <div class="detail">
        <ol class="types">
        ${pokemon.types.map((tipo) => `<li class="type ${tipo}">${tipo}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')



pokeApi.getPokemon(0, 27).then((pokemonsLista = []) => {
    pokemonList.innerHTML += pokemonsLista.map(pokemonsToHTML).join('')
})

