const filterData = (data, condition) => {
  const filteredData = data.filter(element => {
    return element.type.includes(condition) === true
  })
  return filteredData;
  
}




//Sort



// Metodo para ordrnar los pokemons alfabeticamente "a-z" o "z-a"
// Por hacer: Orden numerico
//Sort