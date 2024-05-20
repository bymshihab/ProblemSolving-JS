var topKFrequent = function (nums, k) {
  //   console.log(nums);
  let myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    myMap.set(nums[i], (myMap.get(nums[i]) || 0) + 1);
  }

  console.log(myMap.entries(), "map");
  let sortEntries = [...myMap.entries()].sort((a, b) => b[1] - a[1]);
  console.log(sortEntries);

  // console.log(myMap);

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(sortEntries[i][0]);
  }

   console.log(result);

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2,2,2,2, 3], 1));
