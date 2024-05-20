function modifyArray(arr, hjgh) {
    let output = [];

    for(let i = 0; i < arr.length; i++) {
        output.push(hjgh(arr[i]));
    }

    return output;
}

function addBy2(elem) {
    return elem + 2;
}

function multifyBy2(elem) {
    return elem * 2;
}

const additionArr = modifyArray([1,2,3,4,5,6], addBy2);
const multiArr = modifyArray([1,2,3,4,5,6], multifyBy2);

console.log(additionArr); // [3, 4, 5, 6, 7, 8]
console.log(multiArr); // [2, 4, 6, 8, 10, 12]




