
const fs = require('fs');
// const promisify = require('util').promisify;
// const readFile = promisify(fs.readFile);
// async function fn() {
//     let p1 = await readFile('./1.txt', 'utf8');
//     let p2 = await readFile('./2.txt', 'utf8');
//     let p3 = await readFile('./3.txt', 'utf8');
//     console.log(p1);
//     console.log(p3);
//     console.log(p2);

// }
// fn();

let promise = new Promise((resolve, reject) => {
    fs.readFile('./1.txt', 'utf8', (err, reslut) => {

        if (err != null ){
            reject(err)
        } else {
            resolve(reslut)
        };
    })
});
promise.then((res) => {
    console.log(res);
})
