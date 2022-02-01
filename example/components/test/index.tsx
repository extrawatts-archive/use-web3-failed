import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

export const Test = () => {
  const { activate, deactivate, account, library } = useWeb3React();
  const injected = new InjectedConnector({
    supportedChainIds: [1, 4, 137, 56, 80001],
  });
  return (
    <>
      <button onClick={() => activate(injected)}>Connect</button>
      <div>{account}</div>
      <div>he</div>
    </>
  );
};
