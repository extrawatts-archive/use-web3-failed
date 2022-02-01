import React from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { NetworkProviders, Web3ContextProviderProps } from '@tokensuite-web3/types';

const web3Context = React.createContext<any>(null);

const { Provider } = web3Context;

export const Web3ContextProvider: React.FC<Web3ContextProviderProps> = ({ children, networks }) => {
  const web3Context = useWeb3ContextProvider(networks);
  return <Provider value={web3Context}>{children}</Provider>;
};

export const useWeb3Context = (): {
  config: { library: Web3Provider; networks: NetworkProviders };
} => {
  return React.useContext(web3Context);
};

const useWeb3ContextProvider = (networks: NetworkProviders) => {
  return {
    config: {
      networks,
    },
  };
};
