import { Link } from "react-router-dom";

function CelebrityCard({ starToDisplay }) {
  return (
    <article>
      <Link to={`/celebrity/${starToDisplay.id}`}>
        <p>{starToDisplay.name}</p>
      </Link>
    </article>
  );
}

export default CelebrityCard;
