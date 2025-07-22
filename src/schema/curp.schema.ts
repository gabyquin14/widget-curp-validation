import * as yup from "yup";

export const curpSchema = yup.object({
  curp: yup
    .string()
    .required("El CURP es obligatorio")
    .min(18, "El CURP debe tener 18 caracteres")
    .max(18, "El CURP debe tener 18 caracteres"),
});
export const personalDataSchema = yup.object({
  name: yup.string().required("El CURP es obligatorio"),
  first_surname: yup.string().required("El CURP es obligatorio"),
  last_surname: yup.string().required("El CURP es obligatorio"),
  gender: yup.string().required("El CURP es obligatorio"),
  birthdate: yup.string().required("El CURP es obligatorio"),
  state: yup.string().required("El CURP es obligatorio"),
});

export type CurpFormData = yup.InferType<typeof curpSchema>;
