let nums=[0,1,0,1,2,31];
var moveZeroes = function(nums) {
       
    for(let i=0;i<=nums.length-2;i++){
    for(let j=i;j<=nums.length-1-i;j++){
        if(nums[j]==0){
            let temp=nums[j];
            nums[j]=nums[j+1];
            nums[j+1]=temp;

        }
    }
    }
}

moveZeroes(nums);