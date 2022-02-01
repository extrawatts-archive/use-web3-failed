import { useMemo } from 'react';
import {
  AlchemyProvider,
  Web3Provider,
  JsonRpcSigner,
  JsonRpcProvider,
} from '@ethersproject/providers';
import { NetworkProviders, NetworkTypes, UseProvider } from '@tokensuite-web3/types';
import { Provider } from '../lib/network-provider';
import { ethers } from 'ethers';
import { useWeb3Context } from '.';
declare global {
  interface Window {
    ethereum: any;
  }
}
export const useNetworkProvider = (network: NetworkTypes): UseProvider => {
  const web3Context = useWeb3Context();
  return useMemo((): Web3Provider | AlchemyProvider | JsonRpcSigner | JsonRpcProvider | null => {
    if (network === 'signer') {
      if (window.ethereum) return new ethers.providers.Web3Provider(window.ethereum).getSigner();
      else {
        console.error('You tried to connect as a signer, wallet must be connected');
        return null;
      }
    } else {
      return Provider.get(network, web3Context.config.networks);
    }
  }, [web3Context, window.ethereum]);
};
