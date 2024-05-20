//
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
//   return null
// };

//optimize way

// var twoSum = function (nums, target) {
//   let mp = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];

//     if (mp.has(diff)) {
//       console.log(mp.get(diff), "dsa");
//       return [i, mp.get(diff)];
//     } else {
//       mp.set(nums[i], i);
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));

var twoSum = function (nums, target) {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) {
    let diff = target - nums[index];

    if (map.has(diff)) {
      return [index, map.get(diff)];
    } else {
      map.set(nums[index], index);
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
