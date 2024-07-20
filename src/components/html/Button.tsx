type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export const CostumButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
