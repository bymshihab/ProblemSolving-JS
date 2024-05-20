//Leetcode:  217. Contains Duplicate

//brute force
// var containsDuplicate = function (nums) {
//   nums.sort();
//   console.log(nums);
//   for (let i = 0; i <= nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       return "yes duplicate";
//     }
//   }
//   return "No duplicate";
// };


// optimize way: 
var containsDuplicate = function (nums) {
  console.log(nums);
  let setData = new Set();
  
  for(let i =0; i< nums.length; i++){
    setData.add(nums[i]);
  }


  if(nums.length !== setData.size){
    return true;
  }

  return false;
}



console.log(containsDuplicate([1, 2, 3, 1])); // Output: true

// time & space complexity: O(n)
