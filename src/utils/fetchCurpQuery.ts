import axios, { AxiosError } from "axios";
import type { MockApiCall } from "../types/apiTypes";
import type {
  IFormInputCurp,
  IFormInputPersonalData,
} from "../types/formTypes";

export const fetchDataByCurp = async (data: IFormInputCurp) => {
  try {
    const cached = searchCurpInLocalstorage(data.curp);
    if (cached) {
      return {
        data: cached,
        error: null,
      };
    }
    const response = await axios.post("/.netlify/functions/fetchByCurp", data);
    saveCurpInLocalstorage(data.curp, response.data.data);

    return {
      data: response.data.data,
      error: null,
    };
  } catch (error) {
    const axiosError = error as AxiosError<{ errors: { detail: string } }>;
    return {
      data: null,
      error: {
        message: axiosError.response?.data?.errors.detail || "Unexpected error",
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

    return {
      data: response.data.data,
      error: null,
    };
  } catch (error) {
    const axiosError = error as AxiosError<{ errors: { detail: string } }>;

    return {
      data: null,
      error: {
        message: axiosError.response?.data?.errors.detail || "Unexpected error",
      },
    };
  }
};

const searchCurpInLocalstorage = (curp: string) => {
  const stored = JSON.parse(localStorage.getItem("users") || "{}");
  return stored[curp] || null;
};

//For now, this function only saves the search by curp, not by personal data
const saveCurpInLocalstorage = (curp: string, apiData: any) => {
  const stored = JSON.parse(localStorage.getItem("users") || "{}");
  stored[curp] = apiData;
  localStorage.setItem("users", JSON.stringify(stored));
};
