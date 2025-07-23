import * as yup from "yup";

export const curpSchema = yup.object({
  curp: yup
    .string()
    .required("El CURP es obligatorio")
    .min(18, "El CURP debe tener 18 caracteres")
    .max(18, "El CURP debe tener 18 caracteres"),
});
export const personalDataSchema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  first_surname: yup.string().required("El primer apellido es obligatorio"),
  last_surname: yup.string().required("El segundo apellido es obligatorio"),
  gender: yup.string().required("El género es obligatorio"),
  birthdate: yup.string().required("La fecha de nacimiento es obligatoria"),
  state: yup.string().required("El estado de nacimiento es obligatorio"),
});

export type CurpFormData = yup.InferType<typeof curpSchema>;
