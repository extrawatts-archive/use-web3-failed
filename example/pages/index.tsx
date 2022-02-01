import { useNetworkProvider } from '@tokensuite-web3/core';
import React from 'react';

const Home = () => {
  const provider = useNetworkProvider('signer');
  const [Test, setTest] = React.useState();
  return <div>hey</div>;
};

export default Home;
