"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DepositManager_1 = __importDefault(require("./root/DepositManager"));
var RootChain_1 = __importDefault(require("./root/RootChain"));
var Registry_1 = __importDefault(require("./root/Registry"));
var WithdrawManager_1 = __importDefault(require("./root/WithdrawManager"));
var Web3Client_1 = __importDefault(require("./common/Web3Client"));
var ContractsBase_1 = __importDefault(require("./common/ContractsBase"));
var Matic = /** @class */ (function (_super) {
    __extends(Matic, _super);
    function Matic(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var web3Client = new Web3Client_1.default(options.parentProvider, options.maticProvider, options.parentDefaultOptions || {}, options.maticDefaultOptions || {});
        _this = _super.call(this, web3Client) || this;
        _this.web3Client = web3Client;
        _this.registry = new Registry_1.default(options.registry, _this.web3Client);
        _this.rootChain = new RootChain_1.default(options.rootChain, _this.web3Client);
        _this.depositManager = new DepositManager_1.default(options.depositManager, _this.web3Client);
        _this.withdrawManager = new WithdrawManager_1.default(options.withdrawManager, _this.rootChain, _this.web3Client, _this.registry);
        return _this;
    }
    Matic.prototype.initialize = function () {
        return Promise.all([
            this.withdrawManager.initialize()
        ]);
    };
    Matic.prototype.transferTokens = function (token, to, amount, options) {
        return this.wrapWeb3Promise(this.getERC20TokenContract(token).methods
            .transfer(to, this.encode(amount))
            .send(options), options);
    };
    return Matic;
}(ContractsBase_1.default));
exports.default = Matic;
