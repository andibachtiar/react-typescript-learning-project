import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "andi bachtiar",
      email: "andibachtiarr93@gmail.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  let user: React.ReactNode = (
    <>
      <p>User name is {userContext.user?.name}</p>
      <p>User email is {userContext.user?.email}</p>
    </>
  );

  if (userContext?.user === null) {
    user = null;
  }

  return (
    <>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      {user}
    </>
  );
};
