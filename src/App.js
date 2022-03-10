import React, { useState } from "react";
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Catalog } from "./Catalog";

// Structuring the app this way, allows for a cleaner "App", and we could add "Providers" here as needed.
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
        // <Route path="/" element={<Main />}>
          // <Route path="/courses" exact></Route>
          <PrimaryLayout />
    //     </Route>
    //   </Routes>
    // </BrowserRouter >
  );
}

// As the app grows, this would be in another file
const PrimaryLayout = () => {

  const [user] = useUser();

  return (
    <div className="App">
      <header className="App-header">
        {user ? <Catalog user={user} /> : <Login />}
      </header>
    </div >
  )
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

// Used just to illustrate the path that's not /coursers
// const Main = () => {
//   return (
//     <button>Not /courses</button>
//   )
// }


export default App;
