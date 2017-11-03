const crypto = require('crypto');

class DESPlus {
    constructor(key) {
        this.key = new Buffer(key);
        this.iv = new Buffer(0);
    }
    
    getEncCipher() {
        return crypto.createCipheriv("des-ecb", this.key, this.iv);
    }

    getDecCipher() {
        return crypto.createDecipheriv("des-ecb", this.key, this.iv);
    }

    enctype(str) {
        let cipher = this.getEncCipher();
        let enc = cipher.update(str, 'utf8', 'hex');
        enc += cipher.final('hex');
        return enc;
    }

    dectype(str) {
        let cipher = this.getDecCipher();
        let dec = cipher.update(str, 'hex', 'utf8');
        dec += cipher.final('utf8');
        return dec;
    }
}

function getDealedKeyArr(key) {
    // console.log(new Buffer(key.substr(0,8), "utf8"))
    return key.length < 8 ? key : key.substr(0, 8);
}

module.exports.setDefaultKey = function(key) {
    let dealedKey = getDealedKeyArr(key);
    return new DESPlus(dealedKey);
}