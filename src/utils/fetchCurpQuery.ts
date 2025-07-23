import axios from "axios";
import type { MockApiCall } from "../types/apiTypes";
import type {
  IFormInputCurp,
  IFormInputPersonalData,
} from "../types/formTypes";

const searchByCurpUrl = "https://identity.sandbox.prometeoapi.com/curp/query";
const searchByPersonalDataUrl =
  "https://identity.sandbox.prometeoapi.com/curp/reverse-query";

const getHeaders = () => {
  return {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-API-Key": import.meta.env.VITE_API_KEY,
    Accept: "application/json",
  };
};

export const fetchDataByCurp = async (data: IFormInputCurp) => {
  const formData = new URLSearchParams();
  formData.append("curp", data.curp);
  try {
    const response = await axios({
      url: searchByCurpUrl,
      method: "POST",
      data: formData,
      headers: getHeaders(),
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }

  // try {
  //   return mockApiCall.data;
  // } catch {
  //   return "error";
  // }
};
export const fetchDataByPersonalData = async (data: IFormInputPersonalData) => {
  try {
    const formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    const response = await axios({
      url: searchByPersonalDataUrl,
      method: "POST",
      data: formData,
      headers: getHeaders(),
    });

    return response.data;

    // try {
    //   return mockApiCall.data;
    // } catch {
    //   return "error";
    // }
  } catch (error) {
    console.error(error);
  }
};

const mockApiCall: MockApiCall = {
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
