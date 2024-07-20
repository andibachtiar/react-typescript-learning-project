type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : "Welcome guest!"}
      </h2>
    </>
  );
};
