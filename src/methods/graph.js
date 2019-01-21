// Grafica
const pokemonTypes = ["grass", "poison", "fire", "flying", "water", "bug", "normal","electric", "ground", "fighting", "psychic", "rock", "ice", "ghost","dragon"];
let arreglo = [];
const tiposPokemon = [];
data.forEach(pokemon => {
  pokemon.type.forEach(tipo => {
    const indice = tiposPokemon.indexOf(tipo); // Devuelve -1 si no lo encuentra
    if (indice === -1) {
      tiposPokemon.push(tipo)
    }
  });
});
const pokemonCountPerType = (pokemonData, pokemonType) => {
  // Recorremons el array donde tenemos todos los tipos de pokemons
  pokemonType.forEach( (type) => {
    // console.log(type);
    let contador = 0;

    // Recorremos el array de pokemons
    pokemonData.forEach( (pokemon) => {
      //console.log(pokemon.type);
      // Recorremos cada uno de sus tipos
      pokemon.type.forEach( (uniqueType) => {
        //console.log('cada type', uniqueType);
        // Si el tipo de pokemon que estamos buscando corresponde a uno de los tipos del pokemon
        // que estamos revisando incrementamos el contador
        if (type == uniqueType.toLowerCase()) {
          contador = contador + 1
        }
      })
    });
    arreglo.push(contador)
  });
  console.log('Arreglo de valores', arreglo);
};

pokemonCountPerType(data, pokemonTypes);
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // tipo de grafico
    type: 'bar',
    data: {
        labels: ["grass", "poison", "fire", "flying", "water", "bug", "normal","electric", "ground", "fighting", "psychic", "rock", "ice", "ghost","dragon"],
       
        datasets: [{
            label: "tipos de Pokemon",
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255,1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255,1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderColor: 'black(255, 99, 132)',
            hoverBackgroundColor: 'blue(234,123,45)',
            data: arreglo,
        }]
    },
   // Configuration options go here
    options: {}  
});