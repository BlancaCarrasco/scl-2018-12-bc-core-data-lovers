const data = POKEMON.pokemon;

const containerRoot = document.getElementById("root");
const selectType = document.getElementById("type");

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
    })

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
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // tipo de grafico
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["grass", "poison", "fire", "flying", "water", "bug", "normal","electric", "ground", "fighting", "psychic", "rock", "ice", "ghost","dragon"],
       
        datasets: [{ 
           
            label: "tipos de Pokemon",
            backgroundColor: 'orange(35,66, 132)',
            borderColor: 'black(255, 99, 132)',
            hoverBackgroundColor: 'blue(234,123,45)',
            
            data: [14,33 , 19,12 , 32, 12,24,9,14,8,14,11,5,3,3 ],
            
        }]
    },

    // Configuration options go here
    options: {}
});










