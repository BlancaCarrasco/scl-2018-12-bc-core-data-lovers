const data = POKEMON.pokemon;


// Elements
const containerRoot = document.getElementById("root");
const selectType = document.getElementById("type");
const selectSort = document.getElementById("sort");



// Funcion de ordenado, data = Arreglos de pokemons, sortBy= Opcion copn que se quiere ordenar
const sortData = (data, sortBy) => {
  // console.log(data, sortOrder);

  if (sortBy == 'Ordenar A-Z') {
    return data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  if (sortBy == 'Ordenar Z-A') {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  if (sortBy == 'Ordenar 001-151') {
    return data.sort((a, b) => {
      if (a.num > b.num) {
        return 1;
      }
      if (a.num < b.num) {
        return -1;
      }
      return 0;

    });
  }

  if (sortBy == 'Ordenar 151-001') {
    return data.sort((a, b) => {
      if (a.num < b.num) {
        return 1;
      }
      if (a.num > b.num) {
        return -1;
      }
      return 0;
    });
  }

};

selectSort.addEventListener("change", () => {
  // Obtenemos el valor seleccionado en el el select
  let condition = selectSort.options[selectSort.selectedIndex].text;
  // Creamos un array con los pokemones ordenados
  let sortedPokemons = sortData(data, condition);
  // Borramos los pokemons
  containerRoot.innerHTML = "";
  // Mostramos los pokemones ordenados
  showData(sortedPokemons);
});

//Mostrar toda la data en CARDS
const showData = (data) => {
    //Va ir guardado los datos entregados
    let result = "";
    //console.log(data);

    data.forEach(element => {
        //element -->DATA[i]
        //console.log(element.name);
        result = containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="box">
        <h3>${element.num}</h3>
            <div class="img">
                <img src="${element.img}">
            </div>
            <h2>${element.name}</h2>
            <p>${element.type}</p>
        </div>
        </div>
        </div> `


    });
    return result;  
}

//Filtrado, muestra en CARDS
selectType.addEventListener("change", () => {
    let condition = selectType.options[selectType.selectedIndex].text;
    let filtered = filterData(data, condition);
    //console.log(filtered);
    containerRoot.innerHTML = "";
    filtered.forEach(element => {
        containerRoot.innerHTML +=
            `
        <div>
        <div class="card">
        <div class="box">
        <h3>${element.num}</h3>
            <div class="img">
                <img src="${element.img}">
            </div>
            <h2>${element.name}</h2>
            <p>${element.type}</p>
        </div>
        </div>
        </div> `
    });
    const tiposPokemon = [];
dataPokemon.forEach(pokemon => {
  pokemon.type.forEach(tipo => {
    const indice = tiposPokemon.indexOf(tipo); // Devuelve -1 si no lo encuentra
    if (indice === -1) {
      tiposPokemon.push(tipo)
    }
  });console.log(tiposPokemon)
});
return tiposPokemon;

});
// //const buscarPorNombre = function (nombre, dataPokemon) {
//    // const resultado = dataPokemon.filter(pokemon => pokemon.name.toUpperCase() === nombre.toUpperCase());
    
//    // return resultado;
  
// }
//   const imprimirArregloPokemons = () => {
//   const pokemonesFiltrados = buscarPorNombre('pikachu', data);
// }
// imprimirArregloPokemons(pokemonesFiltrados);

//Que se cargue solo esto en un principio
window.onload = showData(data);



const pokemonTypes = ["grass", "poison", "fire", "flying", "water", "bug", "normal","electric", "ground", "fighting", "psychic", "rock", "ice", "ghost","dragon"];
let arreglo = [];
const pokemonCountPerType = (pokemonData, pokemonType) => {
  console.log(pokemonType);
  console.log(pokemonData);
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
    console.log('Tipo: ', type, '  Cantidad: ', contador);
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
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
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










