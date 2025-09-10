const urlApi = `https://thronesapi.com/api/v2/Characters`;


fetch(urlApi)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {


    
    const namesContainer = document.getElementById('character-list');
    const imgContainer = document.querySelector('.character-image');
    data.forEach((character) => {
      const option = document.createElement('option');
      option.value = character.id;
      option.textContent = character.fullName;
      namesContainer.appendChild(option);
    });
    namesContainer.addEventListener('change', (event) => {
      const selectedId = parseInt(event.target.value);

      const selectedCharacter = data.find(character => character.id === selectedId);

      imgContainer.src = selectedCharacter.imageUrl;
    });
  if (data.length > 0) {
        imgContainer.src = data[0].imageUrl;
      }
    console.log('Datos recibidos:', data);
  })
  .catch((error) => {
    console.error("Error al hacer la petición:", error);
  });