import { useState, type FC } from "react";
import CurpProcess from "../molecules/CurpProcess";
import PersonalDataProcess from "../molecules/PersonalDataProcess";
import Tabs from "../ui/Tabs";
import CurpResultsCard from "../atoms/CurpResultsCard";
import CurpImageWithData from "../atoms/CurpImageWithData";
import ErrorCard from "../atoms/ErrorCard";
import type { CurpApiResponse, userCurpInfo } from "../../types/apiTypes";

const Widget: FC = () => {
  const [curpData, setCurpData] = useState<userCurpInfo | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);
    setCurpData(null);
  };

  const handleCurpResult = (result: CurpApiResponse) => {
    console.log("este es el result: ", result);
    if (result.error) {
      setErrorMessage(result.error.message);
      setCurpData(null);
    } else {
      setCurpData(result.data);
      setErrorMessage(null);
    }
  };

  const tabs = [
    {
      label: "CURP",
      content: <CurpProcess onResult={(data) => handleCurpResult(data)} />,
    },
    {
      label: "Datos personales",
      content: (
        <PersonalDataProcess onResult={(data) => handleCurpResult(data)} />
      ),
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
        {errorMessage && <ErrorCard message={errorMessage} />}
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
