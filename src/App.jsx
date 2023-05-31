import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./clock";

function App() {

  return (
    <div>
      <Clock city={"Stockholm"} timeZone={"Europe/Stockholm"} />
      <Clock city={"Shanghai"} timeZone={"Asia/Shanghai"} />
      <Clock city={"Zagreb"} timeZone={"Europe/Zagreb"} />
    </div>
  );
}

export default App;