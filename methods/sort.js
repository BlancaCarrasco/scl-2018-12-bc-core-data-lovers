// Elemento 
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

// Obtenemos el evento 'Cambio en el select' y llamamos el metodo que definimos arriba
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
