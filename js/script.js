const pokemonUrl = '';

async function getPokemon() {
  try {
    const repsonse = await fetch('https://api.pokemontcg.io/v2/cards/');
    const jsonFromServer = await repsonse.json();
    console.log(jsonFromServer.data);
    const pokemonResults = jsonFromServer.data;

    document.querySelector('.loading').classList.add('hide');

    pokemonResults.forEach(function (value) {
      document.querySelector('main').innerHTML += `
        <div class="card">
        <img src="${value.images.small}">
            <h2>${value.name}</h2>
            <a class="btnElm" href="details.html?id=${value.id}">Read More</a>
    </div>`;
    });
  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}

getPokemon(pokemonUrl);
