const path = require('path')


/**
 * 
 * path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
 * @description 如果没有传入 path 片段，则 path.resolve() 会返回当前工作目录的绝对路径,传入参数会将参数解析为绝对路径
 * 如果最后一个参数第一位是/，则会忽略前面的参数，直接返回最后一个参数
 * 如果最后一个参数第一位不是/，则会将前面的参数都在绝对路径后拼接起来，然后返回
 */

const url = path.resolve('a/b','src/components')
// const url = path.resolve('')
console.log(url);

// function resolve(dir) {
//   return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
// }

const res = path.join(__dirname, 'src/components')
 console.log(res);

//  const path3 = path.join('/foo', 'bar', '/baz/apple', 'aaa', '..');

//  console.log(path3);
const pt = path.resolve()
console.log(pt,'pt');
// const u = path.resolve('wwwroot', './static_files/aaa/bbb', '/gif/image.gif');
const u = path.resolve('wwwroot', '../static_files/aaa/bbb', '/gif/image.gif');
// const u = path.resolve('wwwroot', '/static_files/aaa/bbb', '../gif/image.gif');
// const u = path.resolve('/static_files/aaa/bbb', 'gif/image.gif');
console.log(u,'u');