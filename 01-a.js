console.log('第一次引入，不知道能不能成功');
const fn = (a, b) => a + b;
var tier = setTimeout(function () {
    console.log('我是定时器打出来的，倒计时2秒后');
}, 2000);
const f = 10;
console.log(f);
exports.fns = fn;
exports.time = tier;