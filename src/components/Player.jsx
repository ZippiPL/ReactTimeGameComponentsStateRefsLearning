import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [entredPlayerName, setEntredPlayerName] = useState('');
  // const[submitted,setSubmitted] = useState(false);
  /*
  function handleChange(event){
    setSubmitted(false);
    setEntredPlayerName(event.target.value);
  }*/

  function handleClick() {
    //setSubmitted(true)
    setEntredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {entredPlayerName ?? "unknown entity"} </h2>
      <p>
        <input
          ref={playerName}
          type="text"
        //value={entredPlayerName} 
        //onChange={handleChange}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
