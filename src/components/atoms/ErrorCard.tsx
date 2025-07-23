import { type FC } from "react";

type Props = {
  message: string;
};

const ErrorCard: FC<Props> = ({ message }) => {
  return (
    <section className="text-center">
      <h1>Lo sentimos, ocurrió un error:</h1>
      <span>{message}</span>
    </section>
  );
};
export default ErrorCard;
