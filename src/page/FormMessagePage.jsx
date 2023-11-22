import { useState } from "react";

function FormMessagePage() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form>
      <label>
        Message
        <input onChange={handleMessageChange} type="text" name="message" />
      </label>
      <p>Vous avez envoyé : "{message}"</p>
    </form>
  );
}

export default FormMessagePage;
