import type { FC } from "react";

type Props = {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button: FC<Props> = ({ text, type = "submit" }) => {
  return (
    <button type={type} className="bg-red-600 text-slate-100">
      {text}
    </button>
  );
};
export default Button;
