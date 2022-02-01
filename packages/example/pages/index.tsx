import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import React from 'react';

const Home = () => {
  const [Test, setTest] = React.useState();
  const { activate, deactivate, account, library } = useWeb3React();
  const injected = new InjectedConnector({
    supportedChainIds: [1, 4, 137, 56, 80001],
  });
  return (
    <div>
      hey
      <button onClick={() => activate(injected)}>connect</button>
    </div>
  );
};

export default Home;
