function CreateNumber(numberArr) {
    if (numberArr.length != 10)
        return "wrong number";
    return String('(' + numberArr[0] + numberArr[1] + numberArr[2] + ") " + numberArr[3] + numberArr[4] + numberArr[5] + '-' + numberArr[6] + numberArr[7] + numberArr[8] + numberArr[9]);
}
var phone;
phone = CreateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phone);
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 0)
            return 0;
        else {
            var sum = 0;
            for (var i = 1; i < number; i++) {
                if (i % 3 == 0 || i % 5 == 0)
                    sum += i;
            }
            return sum;
        }
    };
    return Challenge;
}());
console.log(Challenge.solution(10));
function swapArr(arr, k) {
    if (k == 0)
        return arr;
    if (arr.length == 0)
        return null;
    var newArr = [];
    for (var i = 0; i < k; i++)
        newArr[i] = arr[arr.length - (k - i)];
    for (var i = 0; i < arr.length - k; i++)
        newArr[k + i] = arr[i];
    return newArr;
}
var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(swapArr(arr, 3));
function GetMedian(arrnum1, arrnum2) {
    if (arrnum1.length == 0 && arrnum2.length == 0)
        return null;
    var arr = arrnum1.concat(arrnum2).sort();
    //arr.sort();
    //console.log(arr);
    if (arr.length % 2 == 0)
        return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
    else
        return arr[Math.floor(arr.length / 2)];
}
console.log(GetMedian([1, 3], [2]));
console.log(GetMedian([1, 2], [3, 4]));
