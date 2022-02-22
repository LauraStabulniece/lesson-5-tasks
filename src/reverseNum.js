// 7. Write a function that reverse a number.
// Example number: 32243
// Expected Output: 34223


const reverseNum = (x) => {

    const x = '32243';
    x = x + '';
    return x.split('').reverse().join('');
}

export default reverseNum;