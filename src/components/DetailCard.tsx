import React from "react";
import { getFormattedDate } from "../utils/formatDate";
import { DetailInfo } from "./DetailInfo";
import { DetailModal } from "./DetailModal";

export const DetailCard: React.FC<any> = (props: any): JSX.Element => {
  const { mission_name, launch_site, launch_date_local, links } =
    props?.launchesPast || {};
  const DDMMMYYYY = "DD MMM YYYY";
  return (
    <div className="flex flex-col justify-around rounded-lg h-auto w-96 p-4 bg-slate-600">
      <input
        type="checkbox"
        onChange={props.onCompare}
        id="vehicle1"
        name="vehicle1"
        value={props?.launchesPast}
      />
      <p className="text-slate-50 font-bold text-xl text-center">
        {mission_name}
      </p>
      <p className="text-cyan-400 text-center text-base mt-4">
        {launch_site?.site_name_long}
      </p>
      <p className="text-slate-50 text-center test-sm">
        {getFormattedDate(launch_date_local, DDMMMYYYY)}
      </p>
      <video
        src="https://youtu.be/embed/J442-ti-Dhg"
        className="mt-8 mb-8 w-full"
        width="200"
        height="200"
        controls
      >
        <source
          type="video/youtube"
          src="http://www.youtube.com/watch?v=nOEw9iiopwI"
        />
      </video>
      <DetailModal buttonTitle="Learn More">
        <>
          <DetailInfo launchPast={props.launchesPast} />
        </>
      </DetailModal>
    </div>
  );
};
