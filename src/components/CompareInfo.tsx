import React from "react";
import { DetailInfo } from "./DetailInfo";

export const CompareInfo: React.FC<any> = (props: any) => {
  console.log("props?.compareLaunches", props?.compareLaunches);
  return (
    <div className="flex flex-row justify-around">
      {props?.compareLaunches?.map((item: any) => (
        <DetailInfo launchPast={item} />
      ))}
    </div>
  );
};
