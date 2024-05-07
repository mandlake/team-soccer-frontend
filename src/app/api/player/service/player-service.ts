import { API_PLAYERS } from 'app/com/config/prefix';
import axios from 'axios';

export const getPositionsKey = ['getPositions'];
export const getPositions = async () => {
  const fetchData = {
    q: 'position-list',
    page: 1,
    size: 100,
    sort: ['position', 'asc'],
  };
  const { data } = await axios.get(`${API_PLAYERS}/search`, {
    params: fetchData,
    paramsSerializer: { indexes: null },
  });

  return data;
};

export const findAllDistinctPlayerPositions = async ({ id }: any) => {
  const { data } = await axios.get(`${API_PLAYERS}/find-position`, {
    params: id,
  });

  return data;
};
export const findAllDistinctPlayerPositionsOrDefault = async ({ id }: any) => {
  const { data } = await axios.get(`${API_PLAYERS}/find-position-default`, {
    params: id,
  });

  return data;
};
export const findAllGoalkeepersByTeamId = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/player/find-goal-by-team`,
    {
      params: id,
    },
  );

  return data;
};
export const findAllPlayersBySurnameAndHeight = async ({ id }: any) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/player/find-player-name-height`,
    {
      params: id,
    },
  );

  return data;
};
export const findAllMidfieldersForSpecificTeams = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/player/search`, {
    params: id,
  });

  return data;
};
export const findGoalkeeperByHometownForSuwon = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/player/search`, {
    params: id,
  });

  return data;
};
export const findAllPlayersInfoForSeoulTeam = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/player/search`, {
    params: id,
  });

  return data;
};
export const findAllPlayersInfoWithBMIForSeoulTeam = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/player/search`, {
    params: id,
  });

  return data;
};
export const findAllGoalkeepersForSuwonAndDaejeon = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/player/search`, {
    params: id,
  });

  return data;
};
export const findAllPlayersWithoutPosition = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/player/search`, {
    params: id,
  });

  return data;
};
export const findMidfieldersInfo = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/player/search`, {
    params: id,
  });

  return data;
};
export const findTallestPlayersInfo = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/player/search`, {
    params: id,
  });

  return data;
};
export const findShorterPlayersThanTeamAverage = async ({ id }: any) => {
  const { data } = await axios.get(`${process.env.API_URL}/player/search`, {
    params: id,
  });

  return data;
};
