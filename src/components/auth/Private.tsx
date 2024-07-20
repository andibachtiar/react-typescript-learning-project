import { Login } from "./Login";
import { ProfileProp } from "./Profile";

type PrivateProp = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProp>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProp) => {
  if (isLoggedIn) {
    return <Component name="andi bachtiar" />;
  } else {
    return <Login />;
  }
};
