function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}

function substractTwoNumbers(num1,num2) {
    return num1 - num2;
}

function sumMultipleNumbers(arr) {
    sum = arr[0];
    for (let i=1;i<arr.length;i++) {
        sum = sum + arr[i];
    }
    return sum;
}

arr = [2,4,6]

sumMultipleNumbers(arr)

module.exports = {sumTwoNumbers, substractTwoNumbers, sumMultipleNumbers};
