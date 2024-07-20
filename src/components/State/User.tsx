import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "andi bachiar",
      email: "andibachtiarr93@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
      <p>User name is {user ? user.name : "not logged In"}</p>
    </>
  );
};
