import Web3Client from './Web3Client';
import BN from 'bn.js';
import { address } from '../types/Common';
export default class ContractsBase {
    web3Client: Web3Client;
    constructor(web3Client: Web3Client);
    encode(number: BN | string): string;
    getERC20TokenContract(token: address): import("web3/eth/contract").default;
    getERC721TokenContract(token: address): import("web3/eth/contract").default;
    wrapWeb3Promise(promise: any, options: any): any;
}
