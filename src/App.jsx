import { useState, useEffect } from "react";
import Login from "./components/Login";
import Hider from "./components/Hider";
import ApiData from "./components/ApiData";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus) setIsLoggedIn(true);
  }, []);

  return (
    <div className="app-container">
      <div className="card">
        <h1>Hider Tool</h1>
        {!isLoggedIn ? (
          <Login onLogin={setIsLoggedIn} />
        ) : (
          <>
            <Hider />
          </>
        )}
      </div>

      
      {isLoggedIn && <ApiData />}
    </div>
  );
}

export default App;
