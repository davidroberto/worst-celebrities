import { useState } from "react";

function CopyrightPage() {
  // useState permet de créer une variable dans une sorte de BDD
  // pour composant
  // il prend en parametre une valeur par défaut pour cette variable
  // Au premier chargement du composant, il utilise la valeur par défaut
  // mais aux chargements suivants, il utilisera la valeur issue de la "BDD" du composant
  //use state retourne deux choses : la valeur de la variable displayText dans la "bdd du composant"
  // et une fonction qui permet de modifier cette valeur et qui entraine un rechargeemnt du composant
  const [displayText, setDisplayText] = useState(true);

  const handleButtonClick = () => {
    // au click, je modifie la valeur de displayText
    // ce qui provoque un rechargement du composant
    setDisplayText(!displayText);
  };

  return (
    <main>
      {/* j'utilise la valeur de displayText pour afficher ou non le texte */}
      {displayText && <p>Bablablablalbalb</p>}

      <button onClick={handleButtonClick}>Cacher le texte</button>
    </main>
  );
}

export default CopyrightPage;
