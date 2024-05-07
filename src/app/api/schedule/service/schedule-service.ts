import axios from 'axios';

export const queryKey = ['repoData'];
export const getDistinctByPosition = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/schedule`);

  return data;
};

export const findGamesInfoByDate = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
export const findPlayerInfoForSpecificGame = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
export const findGamesWithLargeScoreDifference = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
export const findStadiumsWithoutHomeTeam = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
export const findStadiumsWithGamesInMay2012 = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
