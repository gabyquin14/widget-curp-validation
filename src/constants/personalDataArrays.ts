import type { MockApiCall } from "../types/apiTypes";
import type { SelectOptionsType } from "../types/formTypes";

export const genderOptionsArray: SelectOptionsType[] = [
  {
    value: "M",
    text: "Mujer",
  },
  {
    value: "H",
    text: "Hombre",
  },
];
export const mexicoStates = [
  { value: "AS", text: "Aguascalientes" },
  { value: "BC", text: "Baja California" },
  { value: "BS", text: "Baja California Sur" },
  { value: "CC", text: "Campeche" },
  { value: "CL", text: "Coahuila" },
  { value: "CM", text: "Colima" },
  { value: "CS", text: "Chiapas" },
  { value: "CH", text: "Chihuahua" },
  { value: "DF", text: "Ciudad de México" },
  { value: "DG", text: "Durango" },
  { value: "GT", text: "Guanajuato" },
  { value: "GR", text: "Guerrero" },
  { value: "HG", text: "Hidalgo" },
  { value: "JC", text: "Jalisco" },
  { value: "MC", text: "Estado de México" },
  { value: "MN", text: "Michoacán" },
  { value: "MS", text: "Morelos" },
  { value: "NT", text: "Nayarit" },
  { value: "NL", text: "Nuevo León" },
  { value: "OC", text: "Oaxaca" },
  { value: "PL", text: "Puebla" },
  { value: "QT", text: "Querétaro" },
  { value: "QR", text: "Quintana Roo" },
  { value: "SP", text: "San Luis Potosí" },
  { value: "SL", text: "Sinaloa" },
  { value: "SR", text: "Sonora" },
  { value: "TC", text: "Tabasco" },
  { value: "TS", text: "Tamaulipas" },
  { value: "TL", text: "Tlaxcala" },
  { value: "VZ", text: "Veracruz" },
  { value: "YN", text: "Yucatán" },
  { value: "ZS", text: "Zacatecas" },
  { value: "NE", text: "Nacido en el extranjero" },
];

export const mockApiCall: MockApiCall = {
  data: {
    personal_data: {
      sexo: "MUJER",
      entidad: "DISTRITO FEDERAL",
      nacionalidad: "MEXICO",
      statusCurp: "RCN",
      nombres: "GABS",
      segundoApellido: "RAMIREZ",
      claveEntidad: "DF",
      docProbatorio: 1,
      fechaNacimiento: "08/05/2000",
      primerApellido: "QUINTANILLA",
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
