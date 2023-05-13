

const pokeApi = {} // objeto vazio para armazenar as funções

pokeApi.getPokemonDetail = (pokemon) => {
return  fetch(pokemon.url).then( (response) => response.json())
}

pokeApi.getPokemon = (offset = 1, limit = 11) => {
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

return fetch(url)
.then( (response) => response.json())
.then( (jsonBody) => jsonBody.results)
.then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
.then((detailRequests) => Promise.all(detailRequests))
.then((responsePokemons) => responsePokemons)
.catch( (error) => {console.error(error)}) 
}