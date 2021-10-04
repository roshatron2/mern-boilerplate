import "./App.css";
import Routing from "./Routing";
import Auth from "./components/Auth";
import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return <div className="App">{user ? <Routing /> : <Auth />}</div>;
}

export default App;
