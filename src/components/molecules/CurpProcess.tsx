import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../ui/TextInput";
import { curpSchema } from "../../schema/curp.schema";
import { sendPostMessage } from "../../utils/sendMessageToHost";
import type { IFormInputCurp } from "../../types/formTypes";

const CurpProcess: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(curpSchema),
  });
  const onSubmit: SubmitHandler<IFormInputCurp> = (data) => {
    console.log("data local: ", data);
    sendPostMessage(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register("curp")}
          label="Clave única de registro de población (CURP)"
          name="curp"
          error={errors.curp}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};
export default CurpProcess;
