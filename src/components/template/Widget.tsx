import React, { type FC } from "react";
import CurpProcess from "../molecules/CurpProcess";
import PersonalDataProcess from "../molecules/PersonalDataProcess";

const Widget: FC = () => {
  return (
    <div>
      <CurpProcess />
      <PersonalDataProcess />
    </div>
  );
};
export default Widget;
