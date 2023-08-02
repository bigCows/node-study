/**
 * 通过crypto实现MD5，AES对称加密等算法
 */

const crypto = require('crypto')
const path = require('path')

// const hash = crypto.createHash('sha1')
const hash = crypto.createHash('md5')
console.log(hash,'hash');

// 通过使用秘钥加强算法安全性
const Hmac = crypto.createHmac('sha1','mxf')

// 获取所有加密算法key
const t = crypto.getHashes()
console.log(t);

const hashStr = hash.update('asdaf')
console.log(hashStr,'hashStr');
hash.update('ddfgdfgdf')

const hex = hash.digest('hex')
// console.log(hex);




Hmac.update('mmmmmm')
// console.log(Hmac.digest('hex'));


// 生成16位随机数
const randomNum = String(Math.random() * Math.pow(10,16)).slice(0,16)
console.log(randomNum,'randomNum');

// 获取文件后缀名
const extname = path.extname('index.html').slice(1)
console.log(extname,'extname');

const suffix = 'asdada.jsx'
console.log(suffix.substring(suffix.lastIndexOf('.') + 1));

const SECRET_KEY = 'mxf+02$485@91-=='
let iv = 'asi2!va3=2dl5kd2'
let isData = '哈哈哈哈哈哈啊'

/**
 * @method encrypt
 * @param {any} data
 * @param {string} secertKey
 * @description 加密算法
 * @data 要加密数据
 * @key 秘钥
 * @iv 加密算法的初始向量
 */
const encrypt = (data,secertKey) => {
  let ciper = crypto.createCipheriv("aes-128-cbc",secertKey,iv)
  let encryted = ciper.update(data,'utf-8','hex')
  encryted += ciper.final('hex')
  console.log(encryted,'加密');
  return encryted

}

const isEncrypted = encrypt(isData,SECRET_KEY,iv)


/**
 * 
 * @param {any} data 
 * @param {string} secertKey 
 * @description 解密算法
 */
 const decrypt = (data, secretKey) => {
  // 对密文进行 Base64 解码
  const buf = Buffer.from(data, 'hex').toString('binary');
  let dep = crypto.createDecipheriv('aes-128-cbc', secretKey, iv);
  let res = dep.update(buf,'binary','utf8');
  let res2 = dep.final('utf8');
  return res + res2;
  // console.log(res2, 'res2');
  // console.log(res+res2, 'res2');
}
  const decryptStr = decrypt(isEncrypted,SECRET_KEY)
  console.log(decryptStr,'解密');

