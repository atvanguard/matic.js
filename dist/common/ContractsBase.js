"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bn_js_1 = __importDefault(require("bn.js"));
var assert_1 = __importDefault(require("assert"));
var ChildERC20_json_1 = __importDefault(require("matic-protocol/contracts-core/artifacts/ChildERC20.json"));
var ChildERC721_json_1 = __importDefault(require("matic-protocol/contracts-core/artifacts/ChildERC721.json"));
var ContractsBase = /** @class */ (function () {
    function ContractsBase(web3Client) {
        this.web3Client = web3Client;
    }
    ContractsBase.prototype.encode = function (number) {
        if (bn_js_1.default.isBN(number)) {
            return '0x' + number.toString(16);
        }
        else if (typeof number === 'string') {
            assert_1.default.equal(number.slice(0, 2), '0x', 'expected a 0x prefixed string');
            return number;
        }
    };
    ContractsBase.prototype.getERC20TokenContract = function (token) {
        return new this.web3Client.web3.eth.Contract(ChildERC20_json_1.default.abi, token);
    };
    ContractsBase.prototype.getERC721TokenContract = function (token) {
        return new this.web3Client.web3.eth.Contract(ChildERC721_json_1.default.abi, token);
    };
    ContractsBase.prototype.wrapWeb3Promise = function (promise, options) {
        var _emptyFunc = function () { };
        return promise
            .on('transactionHash', options.onTransactionHash || _emptyFunc)
            .on('receipt', options.onReceipt || _emptyFunc)
            .on('error', options.onError || _emptyFunc);
    };
    return ContractsBase;
}());
exports.default = ContractsBase;
