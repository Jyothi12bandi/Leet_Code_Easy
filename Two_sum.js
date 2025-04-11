var twoSum = function(nums, target) {
    for(let i = 1;i<nums.length;i++){
        for(let j = 0;j<i;j++){
            let sum = nums[i] + nums[j];
            if(sum === target)
            {
                return [i,j];
            }
        }
    }
   
};