import BN from 'bn.js';
import DepositManager from './root/DepositManager';
import RootChain from './root/RootChain';
import Registry from './root/Registry';
import WithdrawManager from './root/WithdrawManager';
import Web3Client from './common/Web3Client';
import { address, SendOptions } from './types/Common';
import ContractsBase from './common/ContractsBase';
export default class Matic extends ContractsBase {
    web3Client: Web3Client;
    depositManager: DepositManager;
    rootChain: RootChain;
    withdrawManager: WithdrawManager;
    registry: Registry;
    constructor(options?: any);
    initialize(): Promise<void[]>;
    setWallet(_wallet: any): void;
    transferERC20Tokens(token: address, to: address, amount: BN | string, options?: SendOptions): Promise<any>;
    transferERC721Tokens(token: address, to: address, tokenId: string, options?: SendOptions): Promise<any>;
    approveERC20TokensForDeposit(token: address, amount: BN | string, options?: SendOptions): Promise<any>;
    depositERC20ForUser(token: address, user: address, amount: BN | string, options?: SendOptions): Promise<any>;
    safeDepositERC721Tokens(token: address, tokenId: BN, options?: SendOptions): Promise<any>;
    startWithdraw(token: address, amount: BN | string, options?: SendOptions): Promise<any>;
    startWithdrawForNFT(token: address, tokenId: BN | string, options?: SendOptions): Promise<any>;
    withdraw(txHash: string, options?: SendOptions): Promise<any>;
    withdrawNFT(txHash: string, options?: SendOptions): Promise<any>;
    processExits(tokenAddress: string, options?: SendOptions): Promise<any>;
    private _validateInputs;
}
