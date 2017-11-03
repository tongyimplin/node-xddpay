// const xddPayUtil = require('../../src/utils/XddUtil');
const xddPayUtil = require('../../index');
const fs = require('fs');

const uuid = require('node-uuid');

/**
 * 默认配置
 */
const DEFAULT_CONFIG = {
    merchantNo: 359004,
    out_storeNo: 888888,
    signKey: 'V1rSdGxEcqXnFsPQqnuVew=='
};
//http://open.xiangqianpos.com/appWeb/payWeb?orderNo=1507709844352&payType=H5_WXJSAPI&
// redirectUrl=http%3A%2F%2Fkmbk.xiaozhuzhu.top%2Fagent%2F%23%2FnotifyBuy&
// total_amount=1&orderInfo=AgentPlatform&sign=5FA9425A02539B12B717E12E15A3E031&
// notifyUrl=http%3A%2F%2Fkmbk.xiaozhuzhu.top%2Fyunpos%2Fagent%2Fpay%2FxddPayRedirectUrl.form&
// undiscount_amount=0&out_storeNo=888&merchantName=F&merchantNo=359004
// const DEFAULT_CONFIG = {
//     merchantNo: 865001,
//     out_storeNo: 888,
//     signKey: 'FURFCzRZNnk7H5C9fBR2Rg=='
// };

let orderNo = "1507715613681" || uuid.v1().replace(/-/ig, '');
let payType = 'H5_WXJSAPI';
let merchantName = 'KemaiTech';
let orderInfo = "AgentPlatform";
let total_amount = 1;
let redirectUrl = 'http://kmbk.xiaozhuzhu.top/agent/#/notifyBuy';
let notifyUrl = 'http://kmbk.xiaozhuzhu.top/yunpos/agent/pay/xddPayRedirectUrl.form';

// 获取支付的跳转链接
hello = xddPayUtil.gotoH5Pay(orderNo, payType, merchantName, total_amount
    , redirectUrl, notifyUrl, DEFAULT_CONFIG.merchantNo, DEFAULT_CONFIG.out_storeNo
    , DEFAULT_CONFIG.signKey, 0, orderInfo);
console.log(hello);

// 支付异步回调验签
// let paramMap ={
//     shop_discount_amount: '0',
//     orderNo: 'ST5066661567781196',
//     platform_discount_amount: '0',
//     create_time: '2017-09-29 14:22:39',
//     openid: '2088902595761066',
//     sign: 'A4E5A890A82CF91115F23EB254BAEC80',
//     source: '3',
//     shop_amount: '1',
//     pay_time: '2017-09-29 14:22:49',
//     order_info: 'kuai餐-1店',
//     pay_status: 'PAY_SUCCESS',
//     payType: 'H5_ALIPAYJSAPI',
//     total_amount: '1',
//     xdd_trade_no: '91506666158650475939',
//     trade_no: '2017092921001004060211780888',
//     undiscount_amount: '0',
//     timestamp: '1506666169388',
//     user_amount: '1'
// };

// console.log(xddPayUtil.verifySign(paramMap, paramMap.sign, DEFAULT_CONFIG.signKey))
// console.log(paramMap.sign)
