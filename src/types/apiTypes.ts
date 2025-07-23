export type CurpApiResponse = {
  data: userCurpInfo | null;
  error: { message: string } | null;
};

export type MockApiCall = {
  data: userCurpInfo;
  errors: null;
};

export type userCurpInfo = {
  personal_data: {
    sexo: "HOMBRE" | "MUJER";
    entidad: string;
    nacionalidad: string;
    statusCurp: string;
    nombres: string;
    segundoApellido: string;
    claveEntidad: string;
    docProbatorio: number;
    fechaNacimiento: string;
    primerApellido: string;
    curp: string;
  };
  document_data: {
    foja: string;
    claveEntidadRegistro: string;
    numActa: string;
    tomo: string;
    anioReg: string;
    municipioRegistro: string;
    libro: string;
    entidadRegistro: string;
    claveMunicipioRegistro: string;
  };
  pdf_url: string;
};
