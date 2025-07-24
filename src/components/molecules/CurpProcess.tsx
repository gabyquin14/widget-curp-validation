import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../ui/TextInput";
import { curpSchema } from "../../schema/curp.schema";
import { sendPostMessage } from "../../utils/sendMessageToHost";
import type { IFormInputCurp } from "../../types/formTypes";
import { fetchDataByCurp } from "../../utils/fetchCurpQuery";
import type { CurpApiResponse } from "../../types/apiTypes";
import Button from "../ui/Button";

type Props = {
  onResult: (data: CurpApiResponse) => void;
};

const CurpProcess: FC<Props> = ({ onResult }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(curpSchema),
  });

  const onSubmit: SubmitHandler<IFormInputCurp> = async (data) => {
    const response = await fetchDataByCurp(data);
    onResult(response);
    sendPostMessage(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputField
          register={register("curp")}
          label="Clave única de registro de población (CURP)"
          placeholder="Ingrese su CURP"
          name="curp"
          error={errors.curp}
        />
        <Button text="Buscar" />
      </form>
    </div>
  );
};
export default CurpProcess;
