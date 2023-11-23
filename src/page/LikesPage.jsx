import { useState } from "react";

function LikesPage() {
  const [likesCount, setLikesCount] = useState(0);

  const clickHandle = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <main>
      <button onClick={clickHandle}>Like</button>
      <p>Vous avez liké {likesCount} fois</p>
    </main>
  );
}

export default LikesPage;
