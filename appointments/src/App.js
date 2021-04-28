import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [users, setUser] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/users")
  //     .then((res) => res.json())
  //     .then((users) => setUser({ users }));
  // });

  return (
    <div className="App">
      <h1>Users</h1>
      {/* {users.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))} */}
    </div>
  );
}

export default App;
