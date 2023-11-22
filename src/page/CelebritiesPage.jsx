import CelebrityCard from "../component/CelebrityCard";
import Header from "../component/Header";
import { shittyStars } from "../utils/celebrities-utils";

function CelebritiesPage() {
  return (
    <>
      <Header currentPage="celebrities" />
      <main>
        {shittyStars.map((star) => {
          return <CelebrityCard starToDisplay={star} />;
        })}
      </main>
    </>
  );
}

export default CelebritiesPage;
