function CocktailsPage() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });

  return <p>test</p>;
}

export default CocktailsPage;
