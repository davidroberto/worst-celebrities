import { useState } from "react";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState(null);

  if (!cocktails) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((coktailsResponse) => {
        return coktailsResponse.json();
      })
      .then((cocktailsInJs) => {
        setCocktails(cocktailsInJs.drinks);
      });
  }

  const ingredientKeys = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}`;
    ingredientKeys.push(ingredientKey);
  }

  return (
    <main>
      {cocktails ? (
        <>
          {cocktails.map((cocktail) => {
            return (
              <article>
                <h2>{cocktail.strDrink}</h2>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <p>Categorie : {cocktail.strCategory}</p>
                <p>Instructions : {cocktail.strInstructions}</p>

                <p>Ingrédients : </p>
                <ul>
                  {ingredientKeys.map((ingredientKey) => {
                    // cocktail[ingredientKey] permet de récupérer la valeur
                    // de la variable ingredientKey et de l'utiliser comme clé
                    //  de l'objet cocktail === cocktail.strIngredient1
                    return <li>{cocktail[ingredientKey]}</li>;
                  })}
                </ul>
              </article>
            );
          })}
        </>
      ) : (
        <p>Cocktails en cours de chargement</p>
      )}
    </main>
  );
}

export default CocktailsPage;
