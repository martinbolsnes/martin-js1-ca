const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getPokemon(gameId) {
  try {
    console.log(gameId);
    const response = await fetch(
      'https://api.pokemontcg.io/v2/cards/' + gameId
    );
    const jsonResults = await response.json();
    const pokeArray = jsonResults.data;
    console.log(pokeArray);

    document.querySelector('.loading').classList.add('hide');

    document.title = pokeArray.name;
    document.querySelector('h1').innerHTML = `${pokeArray.name}`;
    document.querySelector(
      '.hero__img'
    ).style.backgroundImage = `url('${pokeArray.images.large}')`;
    document.querySelector('.hp').innerHTML = `HP: ${pokeArray.hp}`;
    document.querySelector('.level').innerHTML = `Level: ${pokeArray.level}`;
    document.querySelector('.rarity').innerHTML = `Rarity: ${pokeArray.rarity}`;
    document.querySelector('.type').innerHTML = `Type: ${pokeArray.types}`;
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

getPokemon(id);
