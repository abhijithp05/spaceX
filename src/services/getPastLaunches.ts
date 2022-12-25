export const getPastLaunches = (rocketName: string) => {
  return fetch(
    `https://api.spacexdata.com/v3/launches/past?rocket_name=${rocketName}`
  );
};
