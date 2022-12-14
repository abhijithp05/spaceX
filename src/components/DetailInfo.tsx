import React from "react";
import { getFormattedDate } from "../utils/formatDate";

export const DetailInfo: React.FC<any> = (props: any): JSX.Element => {
  console.log("propsss", props);
  const { mission_name, launch_site, launch_date_local, links, ships } =
    props?.launchPast || {};
  const DDMMMYYYY = "DD MMM YYYY";
  return (
    <div className="flex flex-col justify-around rounded-lg  w-full p-4 bg-slate-600">
      <p className="text-slate-50 font-bold text-xl text-center">
        {mission_name}
      </p>
      <p className="text-cyan-400 text-center text-base mt-4">
        {launch_site?.site_name_long}
      </p>
      <p className="text-slate-50 text-center test-sm">
        {getFormattedDate(launch_date_local, DDMMMYYYY)}
      </p>
      <p className="text-slate-50 text-center test-sm">
        {" "}
        Video Url :<a href={links?.video_link}>Video Link</a>
      </p>
      <p className="text-slate-50 text-center test-sm"> Ships </p>
      {ships?.map((item: any) => (
        <>
          <p className="text-slate-50 text-center test-sm mt-20">
            Name: {item.name}
          </p>
          <p className="text-slate-50 text-center test-sm mt-2">
            Home Port: {item.home_port}
          </p>
          <p className="flex justify-center mt-2">
            <img
              className="text-slate-50 text-center test-sm"
              src={item.image}
              height="600"
              width="400"
            />
          </p>
        </>
      ))}
    </div>
  );
};
