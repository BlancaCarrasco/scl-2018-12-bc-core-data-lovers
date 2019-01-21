const data = POKEMON.pokemon;
// Elements
const containerRoot = document.getElementById("root");

// Borrar Pokemones que se esten mostrado (Limpiar pantalla) 

const clearScreen = () => {
  containerRoot.innerHTML = "";
}


//Mostrar toda la data en CARDS
const showData = (data) => {
  // Limpiamos pantalla
  clearScreen();
  //Va ir guardado los datos entregados
  let result = "";
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
                <p>${element.type}</p><br>
                <a href="#" class="btn btn-primary"></a>
          </div>
        </div>
      </div> `;
  });
  return result;    
}





window.onload = showData(data);