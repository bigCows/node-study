const path = require('path')

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
// const u = path.resolve('wwwroot', '../static_files/aaa/bbb', '/gif/image.gif');
const u = path.resolve('wwwroot', '/static_files/aaa/bbb', '../gif/image.gif');
// const u = path.resolve('/static_files/aaa/bbb', 'gif/image.gif');
console.log(u,'u');