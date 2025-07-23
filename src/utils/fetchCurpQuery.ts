import axios, { AxiosError } from "axios";
import type { MockApiCall } from "../types/apiTypes";
import type {
  IFormInputCurp,
  IFormInputPersonalData,
} from "../types/formTypes";

export const fetchDataByCurp = async (data: IFormInputCurp) => {
  try {
    const response = await axios.post("/.netlify/functions/fetchByCurp", data);
    console.log("response from api: ", response);
    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ errors: { detail: string } }>;

    return {
      error: {
        message: axiosError.response?.data?.errors.detail || "Error inesperado",
      },
    };
  }
};
export const fetchDataByPersonalData = async (data: IFormInputPersonalData) => {
  try {
    const response = await axios.post(
      "/.netlify/functions/fetchByPersonalData",
      data
    );
    console.log("response from api: ", response);
    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ errors: { detail: string } }>;

    return {
      error: {
        message: axiosError.response?.data?.errors.detail || "Error inesperado",
      },
    };
  }
};

export const mockApiCall: MockApiCall = {
  data: {
    personal_data: {
      sexo: "HOMBRE",
      entidad: "DISTRITO FEDERAL",
      nacionalidad: "MEXICO",
      statusCurp: "RCN",
      nombres: "JUAN",
      segundoApellido: "GONZALEZ",
      claveEntidad: "DF",
      docProbatorio: 1,
      fechaNacimiento: "04/03/1986",
      primerApellido: "PEREZ",
      curp: "ABCD880304HDWXYZ45",
    },
    document_data: {
      foja: "",
      claveEntidadRegistro: "25",
      numActa: "00064",
      tomo: "",
      anioReg: "1988",
      municipioRegistro: "GUASAVE",
      libro: "0001",
      entidadRegistro: "SINALOA",
      claveMunicipioRegistro: "011",
    },
    pdf_url: "/pdf/81116a034e539b523b746944b35875b8.pdf",
  },
  errors: null,
};
