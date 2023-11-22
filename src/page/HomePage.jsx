import CelebrityCard from "../component/CelebrityCard";
import Header from "../component/Header";
import { shittyStars } from "../utils/celebrities-utils";

function HomePage() {
  const shittyStarsSortedByDate = shittyStars.sort((star1, star2) => {
    return new Date(star1.publishedAt) - new Date(star2.publishedAt);
  });

  const lastShittyStars = shittyStarsSortedByDate.slice(-5);

  const shittyStarsPickedByTeam = shittyStarsSortedByDate.filter((star) => {
    return star.isPickedByTeam === true;
  });

  const lastShittyStarsPickedByTeam = shittyStarsPickedByTeam.slice(-3);

  return (
    <>
      <Header currentPage="home" />
      <main>
        <section>
          <h2>Last Celebrities: </h2>
          {lastShittyStars.map((star) => {
            return <CelebrityCard starToDisplay={star} />;
          })}
          <h2>Choix de de la rédac :</h2>
          {lastShittyStarsPickedByTeam.map((star) => {
            return <CelebrityCard starToDisplay={star} />;
          })}
        </section>
      </main>
    </>
  );
}

export default HomePage;
