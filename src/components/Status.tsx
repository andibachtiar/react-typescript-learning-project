type StatusProps = {
  status: "loading" | "success" | "failed";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetch successfully";
  } else if (props.status === "failed") {
    message = "Error fetch data";
  }

  return (
    <>
      <h2>Status - {message}</h2>
    </>
  );
};
