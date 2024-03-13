import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/WelcomeSection/Welcome";
import Users from "./components/Users/Users";
import AddUserComponent from "./components/AddUserComponent/AddUserComponent";
import "./index.scss";

export const UserUpdateContext = createContext(null);

function App() {
  const [userUpdated, setUserUpdated] = useState(false);

  return (
    <UserUpdateContext.Provider
      value={{ userUpdated: userUpdated, setUserUpdated: setUserUpdated }}
    >
      <Header />
      <Welcome />
      <Users />
      <AddUserComponent />
    </UserUpdateContext.Provider>
  );
}

export default App;
