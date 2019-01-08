// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//console.log(POKEMON.pokemon)
const data = POKEMON.pokemon;
const nombrePokemones = (data) => {
  for (let i = 0; i < data.lengt; i++) {
    nombres.push(data[i].name)
  }
  return nombres;
}

// Metodo que devuelve un arreglo con todos los tipos de pokemon

const cargarTiposPokemons = (dataPokemon) => {
  const tiposPokemon = [];
  dataPokemon.forEach(pokemon => {
    pokemon.type.forEach(tipo => {
      const indice = tiposPokemon.indexOf(tipo); // Devuelve -1 si no lo encuentra
      if (indice === -1) {
        tiposPokemon.push(tipo)
      }
    });
  });
  //console.log(tiposPokemon)
  return tiposPokemon;
};


