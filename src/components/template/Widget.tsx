import { useState, type FC } from "react";
import CurpProcess from "../molecules/CurpProcess";
import PersonalDataProcess from "../molecules/PersonalDataProcess";
import Tabs from "../ui/Tabs";
import CurpResultsCard from "../atoms/CurpResultsCard";
import CurpImageWithData from "../atoms/CurpImageWithData";

const Widget: FC = () => {
  const [curpData, setCurpData] = useState(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);
    setCurpData(null);
  };

  const tabs = [
    {
      label: "CURP",
      content: <CurpProcess onResult={(data) => setCurpData(data)} />,
    },
    {
      label: "Datos personales",
      content: <PersonalDataProcess onResult={(data) => setCurpData(data)} />,
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen px-4 w-dvw">
      <div className="w-full max-w-2xl my-8 p-8 rounded-2xl shadow-md border border-gray-200 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">Curp validation</h1>
        <Tabs
          tabs={tabs}
          activeIndex={selectedTabIndex}
          onTabChange={handleTabChange}
        />
        {curpData && (
          <>
            <CurpResultsCard data={curpData} />
            <CurpImageWithData data={curpData} />
          </>
        )}
      </div>
    </div>
  );
};
export default Widget;
