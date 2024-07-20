type ListProp<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends React.ReactNode>({
  items,
  onClick,
}: ListProp<T>) => {
  return (
    <>
      <h2>List of Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item as string}
          </div>
        );
      })}
    </>
  );
};
