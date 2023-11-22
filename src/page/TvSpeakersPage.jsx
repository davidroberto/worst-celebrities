import Header from "../component/Header";
import SpeakerCard from "../component/SpeakerCard";

function TvSpeakersPage() {
  const shittyTvSpeakers = ["Laurent Ruquier", "Pascal Praud", "Hanouna", "Morandini", "Fogiel"];

  return (
    <>
      <Header />

      <main>
        <h3>Les présentateurs avengers Lidl : </h3>
        {shittyTvSpeakers.map((speaker) => {
          return <SpeakerCard speakerName={speaker} />;
        })}
      </main>
    </>
  );
}

export default TvSpeakersPage;
