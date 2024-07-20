export type ProfileProp = {
  name: string;
};

export const Profile = ({ name }: ProfileProp) => {
  return <div>Private Profile Component. Name is {name}</div>;
};
