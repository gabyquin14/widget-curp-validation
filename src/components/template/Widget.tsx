import { type FC } from "react";
import CurpProcess from "../molecules/CurpProcess";
import PersonalDataProcess from "../molecules/PersonalDataProcess";
import Tabs from "../ui/Tabs";

const tabs = [
  { label: "CURP", content: <CurpProcess /> },
  { label: "Datos personales", content: <PersonalDataProcess /> },
];

const Widget: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1>Curp validation</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};
export default Widget;
