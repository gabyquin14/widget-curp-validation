import * as yup from "yup";

export const curpSchema = yup.object({
  curp: yup
    .string()
    .required("El CURP es obligatorio")
    .min(18, "El CURP debe tener 18 caracteres")
    .max(18, "El CURP debe tener 18 caracteres"),
});
export const personalDataSchema = yup.object({
  name: yup.string().required("Tu nombre es un campo obligatorio"),
  first_surname: yup
    .string()
    .required("Tu primer nombre es un campo obligatorio"),
  last_surname: yup
    .string()
    .required("Tu primer apellido es un campo obligatorio"),
  gender: yup.string().required("Tu CURP es un campo obligatorio"),
  birthdate: yup.string().required("Tu CURP es un campo obligatorio"),
  state: yup.string().required("Tu CURP es un campo obligatorio"),
});

export type CurpFormData = yup.InferType<typeof curpSchema>;
