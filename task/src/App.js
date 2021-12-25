import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
const gitHubUrl = "https://reqres.in/api/users?page=1 ";
function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>user data</h1>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.location}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.company}</h5>
      </div>
    </div>
  );
}

export default App;
