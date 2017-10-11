// const xddPayUtil = require('../../src/utils/XddUtil');
const xddPayUtil = require('../../index');

const uuid = require('node-uuid');

/**
 * 默认配置
 */
// const DEFAULT_CONFIG = {
//     merchantNo: 359012,
//     out_storeNo: 888,
//     signKey: 'AV1rSdGxEcqXnFsPQqnuVew=='
// };
const DEFAULT_CONFIG = {
    merchantNo: 865001,
    out_storeNo: 8650010001,
    signKey: 'FURFCzRZNnk7H5C9fBR2Rg=='
};

let orderNo = "d306b130acc711e7bf9fada355409249" || uuid.v1().replace(/-/ig, '');
let payType = 'H5_WXJSAPI';
let merchantName = 'nudle';
let total_amount = 1;
let redirectUrl = 'http://kmbk.xiaozhuzhu.top/yunposvol/';
let notifyUrl = 'http://kmbk.xiaozhuzhu.top/yunpos/test.form';

// 获取支付的跳转链接
hello = xddPayUtil.gotoH5Pay(orderNo, payType, merchantName, total_amount
    , redirectUrl, notifyUrl, DEFAULT_CONFIG.merchantNo, DEFAULT_CONFIG.out_storeNo
    , DEFAULT_CONFIG.signKey);
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
