const inputSearch = document.getElementById("input-busqueda");
// Buscar por nombre
inputSearch.addEventListener("keypress", (event)=>{
  if( event.key == 'Enter') {
    console.log('buscamos', inputSearch.value);
    // Utilizamos la forma de iteracion some(), ya que esta rompe el ciclo cuando encuentra un valor igual a true
    let resultado = 'No encontrado'
    data.some((pokemon) => {
      console.log('comparando', pokemon.name.toLowerCase() ,inputSearch.value.toLowerCase());
      console.log(pokemon.name.toLowerCase() == inputSearch.value.toLowerCase());
      
      if(pokemon.name.toLowerCase() == inputSearch.value.toLowerCase()) {
        console.log('encontrado', pokemon);
        resultado = pokemon;
        // Borramos
        clearScreen();
        // Mostramos pokemon encontrado
        showData([resultado]);
        
        return true;
      }
      return false;
    });
  }
});
