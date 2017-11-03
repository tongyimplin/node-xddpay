const DESPlus = require('../../src/utils/DESPlus');

let desUtil = DESPlus.setDefaultKey("kmpassjm2013");
console.log(desUtil)

let encstr = desUtil.enctype('123456');
console.log(`encstr: ${encstr}`);
let decstr = desUtil.dectype(encstr);
console.log(`decstr: ${decstr}`)

// const crypto = require('crypto');
// 
// function test_des(param) {  
//     var key = new Buffer(param.key);  
//     var iv = new Buffer(param.iv ? param.iv : 0)  
//     var plaintext = param.plaintext  
//     var alg = param.alg  
//     var autoPad = param.autoPad  
      
//     //encrypt  
//     var cipher = crypto.createCipheriv(alg, key, iv);  
//     cipher.setAutoPadding(autoPad)  //default true  
//     var ciph = cipher.update(plaintext, 'utf8', 'hex');  
//     ciph += cipher.final('hex');  
//     console.log(alg, ciph)  
  
//     //decrypt  
//     var decipher = crypto.createDecipheriv(alg, key, iv);  
//     cipher.setAutoPadding(autoPad)  
//     var txt = decipher.update(ciph, 'hex', 'utf8');  
//     txt += decipher.final('utf8');      
//     assert.equal(txt, plaintext, 'fail');  
// }  

// test_des({  
//     alg: 'des-ecb',  
//     autoPad: true,  
//     key: 'kmpassjm',  
//     plaintext: '123456',  
//     iv: null  
// })  
  