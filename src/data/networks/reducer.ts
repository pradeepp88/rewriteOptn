import { AnyAction } from "redux";
import {
  SET_NETWORK
} from "./constants";

import { NetworkCode } from "../../utils/network-utils";

enum networkType {
  Mainnet = "mainnet",
  Testnet = "testnet"
}

export type Network = 
  | "mainnet"
  | "testnet";

export type State = {
  version: string;
  currentNetwork: networkType;
}

export const initialState: State = {
  version: "1",
  currentNetwork: networkType.Mainnet
}

const updateNetwork = (state: State, network: Network) => {
  console.log(network)
  let net
  if (state.currentNetwork === networkType.Mainnet) {
    net = networkType.Testnet
  } else if (state.currentNetwork === networkType.Testnet) {
    net = networkType.Mainnet
  } else {
    net = networkType.Testnet
  }
  return {
    ...state,
    currentNetwork: net
  }
}

const networks = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_NETWORK:
      return updateNetwork(state, action.payload);

    default:
      return state;
  }
}

export default networks;