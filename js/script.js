const pokemonUrl = '';

async function getPokemon() {
  try {
    const repsonse = await fetch('https://api.pokemontcg.io/v2/cards');
    const jsonFromServer = await repsonse.json();
    console.log(jsonFromServer.data);
    const pokemonResults = jsonFromServer.data;

    document.querySelector('.loading').classList.add('hide');

    pokemonResults.forEach(function (value) {
      document.querySelector('main').innerHTML += `
        <div class="card">
            <h3>${value.name}</h3>
            <p>HP: ${value.hp}</p>
            <p>${value.rarity}</p>
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
