import axios from 'axios';

export const queryKey = ['repoData'];
export const getDistinctByPosition = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/stadium`);

  return data;
};

export const findAllTeamsWithStadiums = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
