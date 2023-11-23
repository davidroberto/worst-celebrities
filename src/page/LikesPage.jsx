import { useState } from "react";

function LikesPage() {
  const [likesCount, setLikesCount] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  const clickHandle = () => {
    if (likesCount < 5) {
      setLikesCount(likesCount + 1);
    } else {
      setDisplayMessage(true);
    }
  };

  const handleCloseMessage = () => {
    setDisplayMessage(false);
  };

  return (
    <main>
      {displayMessage && (
        <div>
          <p>Vous ne pouvez pas liker plus de 5 fois</p>
          <button onClick={handleCloseMessage}>Fermer le message</button>
        </div>
      )}

      <button onClick={clickHandle}>Like</button>
      <p>Vous avez liké {likesCount} fois</p>
    </main>
  );
}

export default LikesPage;
