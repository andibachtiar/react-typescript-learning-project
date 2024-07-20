type InputProps = {
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("oke");
  };

  return <input type="text" onChange={handleInputChange} value={props.value} />;
};
