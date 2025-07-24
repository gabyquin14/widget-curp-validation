import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../ui/TextInput";
import { personalDataSchema } from "../../schema/curp.schema";
import type { IFormInputPersonalData } from "../../types/formTypes";
import { sendPostMessage } from "../../utils/sendMessageToHost";
import {
  genderOptionsArray,
  mexicoStates,
} from "../../constants/personalDataArrays";
import SelectInput from "../ui/SelectInput";
import { fetchDataByPersonalData } from "../../utils/fetchCurpQuery";
import type { CurpApiResponse } from "../../types/apiTypes";
import Button from "../ui/Button";

type Props = {
  onResult: (data: CurpApiResponse) => void;
};

const PersonalDataProcess: FC<Props> = ({ onResult }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalDataSchema),
  });
  const onSubmit: SubmitHandler<IFormInputPersonalData> = async (data) => {
    const [year, month, day] = data.birthdate.split("-");
    const formattedData = {
      ...data,
      birthdate: `${day}/${month}/${year}`,
    };

    const response = await fetchDataByPersonalData(formattedData);
    onResult(response);
    sendPostMessage(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputField
          register={register("name")}
          label="Nombre"
          name="name"
          placeholder="Ingresa tu nombre"
          error={errors.name}
        />
        <InputField
          register={register("first_surname")}
          label="Primer apellido"
          name="first_surname"
          placeholder="Ingresa tu primer apellido"
          error={errors.first_surname}
        />
        <InputField
          register={register("last_surname")}
          label="Segundo apellido"
          name="last_surname"
          placeholder="Ingresa tu segundo apellido"
          error={errors.last_surname}
        />
        <SelectInput
          register={register("state")}
          label="Estado de nacimiento"
          name="state"
          options={mexicoStates}
          error={errors.state}
        />
        <InputField
          register={register("birthdate")}
          label="Fecha de nacimiento"
          name="birthdate"
          type="date"
          error={errors.birthdate}
        />

        <SelectInput
          register={register("gender")}
          label="Género"
          name="gender"
          options={genderOptionsArray}
          error={errors.gender}
        />

        <Button text="Buscar" />
      </form>
    </div>
  );
};
export default PersonalDataProcess;
