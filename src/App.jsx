import { useState } from "react";
import "./App.css";
import AuthContainer from "./components/auth/AuthContainer";
import Login from "./components/parameters/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthContainer />
    </>
  );
}

export default App;
