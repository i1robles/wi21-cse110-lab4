
function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], function(x) {
            console.log("x is " + x);
            return x * 2;
        }));
    }
    return newArr;
}

function doSomething(num, callback) {
    console.log("num is " + num);
    return callback(num + 2);
}

function doSomething2(num, callback) {
    console.log("num is " + num);
    return callback(num + 10);
}

console.log(modifyArray([1,2,3], doSomething));
console.log(modifyArray([2,4,6], doSomething));

console.log(modifyArray([1,2,3], doSomething2));
console.log(modifyArray([2,4,6], doSomething2));
