import axios from "axios";
import type { MockApiCall } from "../types/apiTypes";
import type {
  IFormInputCurp,
  IFormInputPersonalData,
} from "../types/formTypes";

export const fetchDataByCurp = async (data: IFormInputCurp) => {
  const formData = new URLSearchParams();
  formData.append("curp", data.curp);

  try {
    return mockApiCall.data;
  } catch {
    return "error";
  }
  // const formData = new URLSearchParams();
  // formData.append("curp", "ABCD880304HDWXYZ45");

  // const res = await axios( {
  //   method: "POST",
  // url:"http://localhost:3001/curp/query",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     Accept: "application/json",
  //   },
  //   data: formData.toString(),
  // });
  // const parsedResponse = await res.json();
  // console.log(parsedResponse);
  //     console.log(response.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
};
export const fetchDataByPersonalData = async (data: IFormInputPersonalData) => {
  try {
    const formData = new URLSearchParams();
    formData.append("curp", data.curp);

    try {
      return mockApiCall.data;
    } catch {
      return "error";
    }
  } catch (err) {
    console.error(err);
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
