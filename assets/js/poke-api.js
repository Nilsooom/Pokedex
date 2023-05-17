
const pokeApi = {} // objeto vazio para armazenar as funções

function covertPokeApiDetailtoPokemon(pokeDetail) {
const pokemon = new Pokemon()
pokemon.name = pokeDetail.name
pokemon.number = pokeDetail.order
pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
pokemon.type =  pokeDetail.types[0].type.name
pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
return  fetch(pokemon.url).then( (response) => response.json())
.then(covertPokeApiDetailtoPokemon)
}

pokeApi.getPokemon = (offset = 0, limit = 11) => {
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

return fetch(url)
.then( (response) => response.json())
.then( (jsonBody) => jsonBody.results)
.then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
.then((detailRequests) => Promise.all(detailRequests))
.then((responsePokemons) => responsePokemons)
}