import type { userCurpInfo } from "../../types/apiTypes";

type Props = {
  data: userCurpInfo | null;
};

const CurpImageWithData = ({ data }: Props) => {
  return (
    <div className="relative">
      <img
        src="/src/assets/curp.jpg"
        alt="Foto base"
        className="object-cover"
      />
      <span className="absolute left-[28%] top-[43%] text-black px-2 py-1 rounded text-sm">
        {data?.personal_data.curp}
      </span>
      <span className="absolute left-[28%] bottom-[30%] text-black px-2 py-1 rounded text-sm">
        {`${data?.personal_data.nombres} ${data?.personal_data.primerApellido} ${data?.personal_data.segundoApellido}`}
      </span>
      <span className="absolute left-[30%] bottom-[5%] text-black px-2 py-1 rounded text-sm">
        {data?.document_data.anioReg}
      </span>
      <span className="absolute left-[47%] bottom-[5%] text-black px-2 py-1 rounded text-sm">
        {data?.document_data.libro}
      </span>
      <span className="absolute right-[25%] bottom-[5%] text-black px-2 py-1 rounded text-sm">
        {data?.document_data.municipioRegistro}
      </span>
    </div>
  );
};
export default CurpImageWithData;
