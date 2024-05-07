import { NextPage } from 'next';
import { QueryClient } from '@tanstack/react-query';
import PlayerList from 'app/api/player/module/player-list';
import {
  getPositions,
  getPositionsKey,
} from 'app/api/player/service/player-service';
import { useEffect } from 'react';

const PlayerPage: NextPage = ({ data }: any) => {
  useEffect(() => {
    console.log('MY INFO : PlayerPage useEffect data is');
    console.log(data);
  }, []);
  return (
    <>
      <PlayerList />
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getPositionsKey, getPositions);
  const data = queryClient.getQueryData(getPositionsKey);
  console.log('MY INFO : PlayerPage SSR data is');
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

export default PlayerPage;
