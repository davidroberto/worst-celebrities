import { useParams } from "react-router-dom";
import { shittyStars } from "../utils/celebrities-utils";
import Header from "../component/Header";

function CelebrityDetailPage() {
  const { id } = useParams();

  const celebrityToDisplay = shittyStars.find((celebrity) => {
    return celebrity.id == id;
  });

  return (
    <>
      <Header />
      <main>
        {celebrityToDisplay ? (
          <article>
            <h2>{celebrityToDisplay.name}</h2>
            <p>{celebrityToDisplay.bio}</p>
            <img src={celebrityToDisplay.img} alt={celebrityToDisplay.name} />
          </article>
        ) : (
          <p>Pas de célébrité trouvée</p>
        )}
      </main>
    </>
  );
}

export default CelebrityDetailPage;
