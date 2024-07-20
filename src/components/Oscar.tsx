type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <p>{props.children}</p>;
};
