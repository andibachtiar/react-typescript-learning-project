import { ChangeEvent, useState } from "react";

type SelectProps = {
  pageOptions: number;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ pageOptions, handleChange }: SelectProps) => {
  let inputOptions: JSX.Element[] = [];

  for (let i = 1; i <= pageOptions; i++) {
    inputOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return <select onChange={handleChange}>{inputOptions}</select>;
};
