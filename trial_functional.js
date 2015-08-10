
console.log("hello");

function forEach(array, action) {
    console.log(array);
    console.log(array.length);
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

/* reduce -
 * arg: a function, and it's arguments: a number (base) and an array of numbers
 * ret: result of running reduce on the array wiht the base
 */
function reduce(func, base, array) {
    forEach(array, function(Element) {
        base = func(base, Element);
        console.log(base);
    });
    return base
}

/* isZero -
 * arg: a number
 * ret: selfexpl
 */
function isZero(a, b) {
    x = a + (b==0)
    console.log(a,b,x);
    return x;
}


/*countZeroes -
 * arg: array of numbers
 * ret: number of zeroes in the array
 * */
function countZeroes(numbers) {
    x = reduce(isZero, 0, numbers)
    console.log(x)
    return x
}

var test_array = [0,1,2,3,0,0]
document.write(countZeroes(test_array));
