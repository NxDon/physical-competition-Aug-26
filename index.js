/*
给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
    如果这个数被5整除，打印buzz.
    如果这个数能同时被3和5整除，打印fizz buzz.

*/

function fizzBuz(end) {
    for(let i = 0; i <= end; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizz buzz");
        }
        if(i % 3 === 0){
            console.log("fizz");
        }
        if(i % 5 === 0){
            console.log("buzz");
        }
    }
}

fizzBuz(100)