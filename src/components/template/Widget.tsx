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
    { label: "Datos personales", content: <PersonalDataProcess /> },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h1>Curp validation</h1>
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
  );
};
export default Widget;
