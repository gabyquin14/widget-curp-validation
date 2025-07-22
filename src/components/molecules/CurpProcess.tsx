import React, { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../ui/TextInput";
import { curpSchema } from "../../schema/curp.schema";

interface IFormInput {
  curp: string;
}

const CurpProcess: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(curpSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
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
