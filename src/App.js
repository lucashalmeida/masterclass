import React, { useState } from "react";
import './App.css';
import { Catalog } from "./Catalog";

function App() {
  const [user] = useUser();
  return (
    <div className="App">
      <header className="App-header">
        {user ? <Catalog user={user} /> : <Login />}
      </header>
    </div>
  );
}

// A hook to fetch the current user (I have it as a hook so it could be replaced by an authentication hook from a third party).
// It could also be reused.
export const useUser = () => {
  const [user, setUser] = useState({ name: "Lucas", email: "lucashalmeida@gmail.com" });
  return [user, setUser];
}

// Used just to illustrate the path where a user is not set.
const Login = () => {
  return (
    <button>Login</button>
  )
}

export default App;
