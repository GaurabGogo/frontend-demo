import React from "react";

const Velocis2 = (props) => {
  const { var2, toggle } = props;

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter your username"
        id="username"
        value={username}
        onChange={(e) => handleUsernameChange(e.target.value)}
      />
      <div className="error-message">
        {username.length < 2 && "Username is too short"}
      </div>

      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={() => {}}>Submit</button>
    </form>
  );
};

export default Velocis2;
