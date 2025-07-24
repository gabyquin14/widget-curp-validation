import type { userCurpInfo } from "../../types/apiTypes";

type Props = {
  data: userCurpInfo | null;
};

const CurpResultsCard = ({ data }: Props) => {
  if (!data) return null;

  const { personal_data, document_data } = data;

  return (
    <section className="space-y-6 text-gray-950 dark:text-slate-100">
      <div>
        <h2 className="text-lg font-semibold mb-2 text-red-600">
          Datos Personales
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Nombre completo:</strong>
            {`${personal_data.nombres} ${personal_data.primerApellido} ${personal_data.segundoApellido}`}
          </li>
          <li>
            <strong>CURP:</strong> {personal_data.curp}
          </li>
          <li>
            <strong>Sexo:</strong> {personal_data.sexo}
          </li>
          <li>
            <strong>Nacionalidad:</strong> {personal_data.nacionalidad}
          </li>
          <li>
            <strong>Entidad:</strong> {personal_data.entidad}
          </li>
          <li>
            <strong>Clave de Entidad:</strong> {personal_data.claveEntidad}
          </li>
          <li>
            <strong>Fecha de Nacimiento:</strong>
            {personal_data.fechaNacimiento}
          </li>
          <li>
            <strong>Status CURP:</strong> {personal_data.statusCurp}
          </li>
          <li>
            <strong>Documento Probatorio:</strong> {personal_data.docProbatorio}
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2 text-red-600">
          Datos de Registro
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Entidad Registro:</strong> {document_data.entidadRegistro}
          </li>
          <li>
            <strong>Municipio Registro:</strong>{" "}
            {document_data.municipioRegistro}
          </li>
          <li>
            <strong>Clave Entidad Registro:</strong>{" "}
            {document_data.claveEntidadRegistro}
          </li>
          <li>
            <strong>Clave Municipio Registro:</strong>{" "}
            {document_data.claveMunicipioRegistro}
          </li>
          <li>
            <strong>Año de Registro:</strong> {document_data.anioReg}
          </li>
          <li>
            <strong>Libro:</strong> {document_data.libro || "N/A"}
          </li>
          <li>
            <strong>Tomo:</strong> {document_data.tomo || "N/A"}
          </li>
          <li>
            <strong>Foja:</strong> {document_data.foja || "N/A"}
          </li>
          <li>
            <strong>Número de Acta:</strong> {document_data.numActa}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CurpResultsCard;
