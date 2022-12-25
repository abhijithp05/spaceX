import React, { useEffect, useState } from "react";
import { CompareInfo } from "../components/CompareInfo";
import { DetailCard } from "../components/DetailCard";
import { DetailModal } from "../components/DetailModal";
import { Input } from "../components/Input";
import { getPastLaunches } from "../services/getPastLaunches";

const LaunchDashboard: React.FC = (): JSX.Element => {
  const [rocketName, setRocketName] = useState<string>("");
  const [launchData, setLaunchData] = useState([]);
  const [compareLaunches, setCompareLaunch] = React.useState([]);

  useEffect(() => {
    const fetchPastLaunches = async () => {
      try {
        let response = await getPastLaunches(rocketName);
        let data = await response.json();
        setLaunchData(() => data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPastLaunches();
  }, [rocketName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRocketName(value);
  };

  const handleCompare = (obj: any) => {
    setCompareLaunch((prev): any => {
      let arr = [...prev];
      arr.length >= 2 && arr.shift();
      return [...arr, { ...obj }];
    });
  };
  return (
    <div className="pt-40 bg-black">
      <div className="flex flex-row w-full justify-around">
        <Input
          className="w-3/4 border-solid border-white text-black p-2 rounded-3xl "
          placeholder="Search mission name or launch name"
          onChange={handleChange}
        ></Input>
        {compareLaunches?.length === 2 && (
          <DetailModal
            className="w-1/4"
            buttonTitle="Compare"
            modalHeading="Compare"
          >
            <>
              <CompareInfo compareLaunches={compareLaunches} />
            </>
          </DetailModal>
        )}
      </div>
      <div className="w-screen flex flex-row mt-20 justify-around gap-7 flex-wrap bg-black">
        {launchData?.map((item: any) => (
          <DetailCard
            launchesPast={item}
            onCompare={() => {
              handleCompare(item);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(LaunchDashboard);
