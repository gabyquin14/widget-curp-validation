import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../ui/TextInput";
import { personalDataSchema } from "../../schema/curp.schema";
import type { IFormInputPersonalData } from "../../types/formTypes";
import { sendPostMessage } from "../../utils/sendMessageToHost";

const PersonalDataProcess: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalDataSchema),
  });
  const onSubmit: SubmitHandler<IFormInputPersonalData> = (data) => {
    console.log("data local: ", data);
    sendPostMessage(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register("state")}
          label="Estado de nacimiento"
          name="state"
          error={errors.state}
        />
        <InputField
          register={register("birthdate")}
          label="Fecha de nacimiento"
          name="birthdate"
          type="date"
          error={errors.birthdate}
        />
        <InputField
          register={register("name")}
          label="Nombre"
          name="name"
          error={errors.name}
        />
        <InputField
          register={register("first_surname")}
          label="Primer apellido"
          name="first_surname"
          error={errors.first_surname}
        />
        <InputField
          register={register("last_surname")}
          label="Segundo apellido"
          name="last_surname"
          error={errors.last_surname}
        />
        <InputField
          register={register("gender")}
          label="Género"
          name="gender"
          error={errors.gender}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};
export default PersonalDataProcess;
