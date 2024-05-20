var shuffle = function(nums, n) {
    let arrLeft = [];
    let arrRight = [];
    let result = [];


    for(let i =0; i<n; i++){
        arrLeft.push(nums[i]);
    }

    for(let j=n; j<nums.length; j++){
        arrRight.push(nums[j]);
    }

    for (let index = 0; index <n; index++) {
        result.push(arrLeft[index], arrRight[index]);
    }


    return result;    
};

console.log(shuffle([2,5,1,3,4,7], 3));