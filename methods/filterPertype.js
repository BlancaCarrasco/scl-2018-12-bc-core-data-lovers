const selectType = document.getElementById("type");

// Funcion que filtra por tipo
const filterData = (data, condition) => {
  const filteredData = data.filter(element => {
    return element.type.includes(condition) === true
  })
  return filteredData; 
};

//Filtrado, muestra en CARDS
selectType.addEventListener("change", () => {
  let condition = selectType.options[selectType.selectedIndex].text;
  let filtered = filterData(data, condition);
  //console.log(filtered);
  clearScreen();
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
});