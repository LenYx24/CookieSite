import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

export const MainContext = React.createContext();

function App() {
  let [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <MainContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Main loading={loading} />
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
