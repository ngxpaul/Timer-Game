import { useState, useRef } from "react";

export default function Player() {
  const playerRef=useRef()
  const[name,setName]=useState(null)
 function handleclick(){
  setName(playerRef.current.value)
 }
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown name"}</h2>
      <p>
        <input ref={playerRef} type="text"  />
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
