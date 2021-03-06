/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface SplitterInterface extends ethers.utils.Interface {
  functions: {
    "addPayee(address,uint256)": FunctionFragment;
    "addPayees(address[],uint256[])": FunctionFragment;
    "finalize()": FunctionFragment;
    "isPayee(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "payee(uint256)": FunctionFragment;
    "release(address)": FunctionFragment;
    "released(address)": FunctionFragment;
    "shares(address)": FunctionFragment;
    "state()": FunctionFragment;
    "totalPayees()": FunctionFragment;
    "totalReleased()": FunctionFragment;
    "totalShares()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPayee",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addPayees",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "finalize", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPayee", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "payee", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(functionFragment: "released", values: [string]): string;
  encodeFunctionData(functionFragment: "shares", values: [string]): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalPayees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addPayee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addPayees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPayee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalPayees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;

  events: {
    "Finalized()": EventFragment;
    "PayeeAdded(address,uint256)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "PaymentReleased(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Finalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
}

export class Splitter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SplitterInterface;

  functions: {
    addPayee(
      account: string,
      shares_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addPayee(address,uint256)"(
      account: string,
      shares_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addPayees(
      payees: string[],
      shares_: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addPayees(address[],uint256[])"(
      payees: string[],
      shares_: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    finalize(overrides?: Overrides): Promise<ContractTransaction>;

    "finalize()"(overrides?: Overrides): Promise<ContractTransaction>;

    isPayee(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isPayee(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    payee(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "payee(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    release(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "release(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    released(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "released(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    shares(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    state(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "state()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    totalPayees(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalPayees()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    totalReleased(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalReleased()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    totalShares(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalShares()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  addPayee(
    account: string,
    shares_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addPayee(address,uint256)"(
    account: string,
    shares_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addPayees(
    payees: string[],
    shares_: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addPayees(address[],uint256[])"(
    payees: string[],
    shares_: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  finalize(overrides?: Overrides): Promise<ContractTransaction>;

  "finalize()"(overrides?: Overrides): Promise<ContractTransaction>;

  isPayee(account: string, overrides?: CallOverrides): Promise<boolean>;

  "isPayee(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "payee(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  release(account: string, overrides?: Overrides): Promise<ContractTransaction>;

  "release(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "released(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "shares(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  state(overrides?: CallOverrides): Promise<number>;

  "state()"(overrides?: CallOverrides): Promise<number>;

  totalPayees(overrides?: CallOverrides): Promise<BigNumber>;

  "totalPayees()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

  "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addPayee(
      account: string,
      shares_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addPayee(address,uint256)"(
      account: string,
      shares_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addPayees(
      payees: string[],
      shares_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "addPayees(address[],uint256[])"(
      payees: string[],
      shares_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    finalize(overrides?: CallOverrides): Promise<void>;

    "finalize()"(overrides?: CallOverrides): Promise<void>;

    isPayee(account: string, overrides?: CallOverrides): Promise<boolean>;

    "isPayee(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "payee(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    release(account: string, overrides?: CallOverrides): Promise<void>;

    "release(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<number>;

    "state()"(overrides?: CallOverrides): Promise<number>;

    totalPayees(overrides?: CallOverrides): Promise<BigNumber>;

    "totalPayees()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Finalized(): EventFilter;

    PayeeAdded(account: null, shares: null): EventFilter;

    PaymentReceived(from: null, amount: null): EventFilter;

    PaymentReleased(to: null, amount: null): EventFilter;
  };

  estimateGas: {
    addPayee(
      account: string,
      shares_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addPayee(address,uint256)"(
      account: string,
      shares_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addPayees(
      payees: string[],
      shares_: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addPayees(address[],uint256[])"(
      payees: string[],
      shares_: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    finalize(overrides?: Overrides): Promise<BigNumber>;

    "finalize()"(overrides?: Overrides): Promise<BigNumber>;

    isPayee(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isPayee(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "payee(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    release(account: string, overrides?: Overrides): Promise<BigNumber>;

    "release(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    "state()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalPayees(overrides?: CallOverrides): Promise<BigNumber>;

    "totalPayees()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addPayee(
      account: string,
      shares_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addPayee(address,uint256)"(
      account: string,
      shares_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addPayees(
      payees: string[],
      shares_: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addPayees(address[],uint256[])"(
      payees: string[],
      shares_: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    finalize(overrides?: Overrides): Promise<PopulatedTransaction>;

    "finalize()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    isPayee(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPayee(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payee(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "payee(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    release(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "release(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    released(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "released(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shares(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "state()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalPayees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalPayees()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalReleased()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalShares()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
