import { useState } from "react";

type InputProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"input">;

export const CostumInput = ({ variant, ...rest }: InputProps) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        {...rest}
        value={value}
        className={`class-with-${variant}`}
        onChange={(event) => setValue(event.target.value)}
      />
      <span>{}</span>
    </>
  );
};
