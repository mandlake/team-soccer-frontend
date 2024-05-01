import axios from 'axios';

export const queryKey = ['repoData'];
export const getDistinctByPosition = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/team`);

  return data;
};

export const findAllTeamsSortedByName = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
export const findAllPlayersByHeightForSuwonAndDaejeon = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
export const findTeamsWithAverageHeightLowerThanIncheon = async ({
  id,
}: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
