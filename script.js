const contenedorCard = document.getElementById("contenedor-card");

let personajes = [];

const getPersonajes = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const characters = data.results;
    console.log(characters);
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      const characterCard = document.createElement("div")
      characterCard.classList.add('card')
      characterCard.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <div class="informacion">
              <h3>${character.name}</h3>
              <p>Gender: ${character.gender}</p>
              <p>Species: ${character.species}</p>
              <p>Status: ${character.status}</p>
          </div>
          `;
      contenedorCard.appendChild(characterCard);
    }
  } catch (error) {
    console.error(error);
  }
};
getPersonajes();
