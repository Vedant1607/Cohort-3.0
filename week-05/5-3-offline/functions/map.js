// given an array, give me back a new array in which every value is multiplies by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const inputArr = [1, 2, 3, 4, 5];

// const newArr = [];
// for (let i=0;i<inputArr.length;i++) {
//     newArr.push(inputArr[i]*2);
// }

// by using item in inputArr
let newArr = inputArr.map(item => item * 2);

// by using index
newArr = inputArr.map((item, index) => {
    return inputArr[index] * 3;
})

const ans = inputArr.map(function (i) {
    return i * 2;
})

console.log(ans);