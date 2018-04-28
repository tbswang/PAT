/**
 * time: 2018年4月28日22:51:24
 * status: finished
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function (input) {
    // console.log("aa : " + input);

    var result = input.trim().split("").reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    })
    var pinyin = ['ling', 'yi', 'er', 'san', 'si', 'wu', 'liu', 'qi', 'ba', 'jiu']
    var out = '';
    result.toString().split('').forEach(function (ele) {
        out += pinyin[parseInt(ele)] + ' ';
    })
    out = out.substring(0, out.length - 1);
    console.log(out);
    rl.close();
})