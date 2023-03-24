import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock";

function App() {
  // Använd useEffect med tom array om du vill köra kod en gång
  // när komponenten skapas.
  // Används för api-anrop.
  // I vårt fall för att sätta igång klockan. (setInterval)

  return (
    <div>
      <Clock city={"Stockholm"} timeZone={"Europe/Stockholm"} />
      <Clock city={"Japan"} timeZone={"Asia/Japan"} />
      <Clock city={"Zagreb"} timeZone={"Europe/Madrid"} />
    </div>
  );
}

export default App;
