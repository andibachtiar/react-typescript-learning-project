import { useState } from "react";

export const LoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setLoggedIn(true);
  };
  const handleLoggedOut = () => {
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn ? (
        <button onClick={handleLoggedOut}>Log Out</button>
      ) : (
        <button onClick={handleLoggedIn}>Log In</button>
      )}

      <p>{loggedIn ? "User is logged in" : "User is logged out"}</p>
      <p></p>
    </>
  );
};
