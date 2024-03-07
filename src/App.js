import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/WelcomeSection/Welcome";
import Users from "./components/Users/Users";
import AddUserComponent from "./components/AddUserComponent/AddUserComponent";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Users />
      <AddUserComponent />
    </>
  );
}

export default App;
