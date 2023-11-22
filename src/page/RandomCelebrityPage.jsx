import CelebrityCard from "../component/CelebrityCard";
import Header from "../component/Header";
import { shittyStars } from "../utils/celebrities-utils";

function RandomCelebrityPage() {
  const randomIndex = (Math.random() * (shittyStars.length - 1)).toFixed(0);

  const randomCelebrity = shittyStars[randomIndex];

  return (
    <>
      <Header currentPage="random" />
      <CelebrityCard starToDisplay={randomCelebrity} />
    </>
  );
}

export default RandomCelebrityPage;
