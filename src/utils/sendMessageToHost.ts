import type {
  IFormInputCurp,
  IFormInputPersonalData,
} from "../types/formTypes";

export const sendPostMessage = (
  data: IFormInputCurp | IFormInputPersonalData
) => {
  if (typeof window !== "undefined") {
    window.parent.postMessage(
      {
        type: "curp_verified",
        payload: {
          curp: data,
          nombre: "Gabriela",
          status: "verificado",
        },
      },
      "*"
    );
  }
};
