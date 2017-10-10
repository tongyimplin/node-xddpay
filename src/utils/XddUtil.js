const MD5 = require('./MD5');



/**
 * 支付地址
 */
const PayUrl = {
    //支付跳转地址
    PAY_REDIRECT_URL: 'http://open.xiangqianpos.com/appWeb/payWeb',

};
/**
 * 支付方式
 */
const PayTypeList = ['H5_WXJSAPI', 'H5_ALIPAYJSAPI'];


/**
 * 支付类
 */
class XddPayUtil {

    constructor() {
    }

    objectToString(obj) {
        var quest = obj ? Object.keys(obj)
            .sort()
            .filter(key => key!=='sign')
            .map(function (key) {
            var val = obj[key];
            if (Array.isArray(val)) {
                var temp = (key)+ '=[';
                temp +=  val.sort().map(function (val2) {
                    return JSON.stringify(val2);
                }).join(',');
                return temp +=']';
            }
            return (key) + '=' + (val);
        }).join('&') : '';
        return quest;
    }

    createSign(params, signKey) {
        let strParams = `${this.objectToString(params)}&key=${signKey}`;
        // console.log(strParams);
        let sign = MD5.hex_md5_unicode(new Buffer(strParams,'utf8'));
        return sign.toUpperCase();
    }

    //跳转到享多多网页支付
    gotoH5Pay(orderNo, payType, merchantName, total_amount
        , redirectUrl, notifyUrl, merchantNo, out_storeNo, signKey
        , undiscount_amount=0, orderInfo="") {
        // 判断支付方式是否合法
        if(PayTypeList.indexOf(payType) == -1) {
            throw new XddPayError(`payType: [${payType} is not in ${JSON.stringify(PayTypeList)}]`);
        }
        let params = {orderNo, payType, merchantName, total_amount, undiscount_amount, merchantNo, out_storeNo};
        params.orderInfo = merchantName;
        params.redirectUrl = encodeStr(redirectUrl);
        params.notifyUrl = encodeStr(notifyUrl);
        //签名
        let sign = this.createSign(params, signKey);
        // console.log(sign);
        params.sign = sign;
        let encMerchantName = encodeStr(merchantName);
        params.merchantName = encMerchantName;
        params.orderInfo = encMerchantName;
        return `${PayUrl.PAY_REDIRECT_URL}?${this.objectToString(params)}`;
    }

    //验证签名
    verifySign(params, sign, signKey) {
        if(!params) throw new XddPayError('传入的params不能为空');
        if(typeof(params) != 'object') throw new XddPayError("传入的params必须是对象!");
        let calcSign = this.createSign(params, signKey);
        // console.log(calcSign+ ' '+sign)
        return calcSign === sign;
    }
}

/**
 * 获取参数
 * @param {*String} str 
 */
function encodeStr(str) { return encodeURIComponent(str); }

class XddPayError extends Error{
    constructor(msg) {
        super(msg);
    }
}

module.exports = new XddPayUtil;