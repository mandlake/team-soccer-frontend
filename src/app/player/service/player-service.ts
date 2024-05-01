import axios from 'axios';

export const getDistinctByPositionKey = ['getDistinctByPosition'];
export const getDistinctByPosition = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: { p: 'player', op: '' },
  });

  return data;
};

export const findAllDistinctPlayerPositions = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/find-position`, {
    params: id,
  });

  return data;
};
export const findAllDistinctPlayerPositionsOrDefault = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-position-default`,
    {
      params: id,
    },
  );

  return data;
};
export const findAllGoalkeepersByTeamId = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/find-goal-by-team`, {
    params: id,
  });

  return data;
};
export const findAllPlayersBySurnameAndHeight = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
export const findAllMidfieldersForSpecificTeams = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: id,
  });

  return data;
};
export const findGoalkeeperByHometownForSuwon = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: id,
  });

  return data;
};
export const findAllPlayersInfoForSeoulTeam = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: id,
  });

  return data;
};
export const findAllPlayersInfoWithBMIForSeoulTeam = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: id,
  });

  return data;
};
export const findAllGoalkeepersForSuwonAndDaejeon = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: id,
  });

  return data;
};
export const findAllPlayersWithoutPosition = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: id,
  });

  return data;
};
export const findMidfieldersInfo = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: id,
  });

  return data;
};
export const findTallestPlayersInfo = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: id,
  });

  return data;
};
export const findShorterPlayersThanTeamAverage = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/search`, {
    params: id,
  });

  return data;
};
