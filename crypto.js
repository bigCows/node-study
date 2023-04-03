/**
 * 通过crypto实现MD5，AES对称加密等算法
 */

const crypto = require('crypto')

// const hash = crypto.createHash('sha1')
const hash = crypto.createHash('md5')
// 通过使用秘钥加强算法安全性
const Hmac = crypto.createHmac('sha1','mxf')
// 获取所有加密算法key
const t = crypto.getHashes()
// console.log(t);

hash.update('asdaf')
hash.update('ddfgdfgdf')

const hex = hash.digest('hex')
// console.log(hex);




Hmac.update('mmmmmm')
// console.log(Hmac.digest('hex'));


// 生成16位随机数
const randomNum = String(Math.random() * Math.pow(10,16)).slice(0,16)

const SECRET_KEY = 'mxf+02$485@91-=='
let iv = 'asi!va=dlk'
let isData = '哈哈哈哈哈哈啊'

/**
 * @method encrypt
 * @description 加密算法
 * @data 要加密数据
 * @key 秘钥
 * @iv 加密算法的初始向量
 */
const encrypt = (data,secertKey,iv) => {
  let ciper = crypto.createCipheriv('aes-128-ccm',secertKey,iv,{authTagLength: 16})
  let encryted = ciper.update(data,'utf-8','hex')
  encryted += ciper.final('hex')
  console.log(encryted,'cc');
  return encryted

}

const isEncrypted = encrypt(isData,SECRET_KEY,iv)


/**
 * 
 * @param {string} data 
 * @param {string} secertKey 
 * @param {string} iv 
 * @description 解密暂时有误
 */
// const decrypt = (data,secertKey,iv) => {
//   data = Buffer.from(data,'hex').toString('binary')
//   let dep = crypto.createDecipheriv('aes-128-ccm',secertKey,iv,{authTagLength: 16})
//   let res = dep.update(data,'binary','utf8')
//   let res2 = dep.final('utf8')
//   console.log(res,'res');
//   console.log(res2,'res2');
//   console.log(res + res2,'res3');
// }

// decrypt(isEncrypted,SECRET_KEY,iv)

