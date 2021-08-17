//take an array of integers and an integer and find the maximum sum of a subarray with the length
//of the integer passed to the function
const maxSubarraySum = (arr1,max)=>{
    if(arr1.length<max)return null
    let tempMax=0;
    let counter=0;
    for(let i=0;i<max;i++){
        tempMax+=arr1[i]
    }
    let mainMax=tempMax
    for(let i=max;i<arr1.length;i++){
        tempMax=tempMax-arr1[counter] + arr1[i]
        mainMax=Math.max(mainMax,tempMax)
        counter++
    }
    return mainMax
}
// console.log(maxSubarraySum([100,200,300,400],2))
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4))
// console.log(maxSubarraySum([-3,4,0,-2,6,-1],2))
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
// console.log(maxSubarraySum([2,3],3))


//minSubArrayLen
//take an array of positive integers and a positive number and return the minimal length
//of a contiguous subarray of which the sum is greater or equal to the integer passed.
//if there is none, return 0

const minSubArrayLen = (arr1,int)=>{
    let left=0
    let right=0
    let tempSum=0
    let mainSum=Infinity

    while(left<arr1.length){
        if(tempSum<int){
            tempSum+=arr1[right]
            right++
        }else if(tempSum>=int){
            mainSum=Math.min(mainSum,right-left)
            tempSum-=arr1[left]
            left++
        }else{
            break
        }
    }
    return mainSum===Infinity?0 : mainSum
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4, 3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5, 4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 62, 19], 52)); // 1 -> because [62] is greater than 52

//Write a function called findLongestSubstring, which accepts a string and returns the length of the 
//longest substring with all distinct characters.

const findLongestSubstring = (str1)=>{
    let tempLong = 0
    let mainLong = 0
    let start=0
    const counter={}
    for(let i =0;i<str1.length;i++){
        let char=str1[i]
        if(counter[char]){
            mainLong=Math.max(tempLong,mainLong)
            tempLong-=counter[char]
        }else{
            tempLong++
        }
            counter[str1[i]]=i
    }
    console.log(mainLong)
    return(mainLong)
}

// findLongestSubstring(''); // 0
// findLongestSubstring('rithmschool'); // 7
// findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
