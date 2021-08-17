//general idea:looking for a pair of references across a linear structure.

//ex: sumzero, looking across a sorted array for the first pair of indices that add up to 0

const sumzero = (arr)=>{
    let left=0
    let right=arr.length-1
    while(left<right){
        if(arr[left]+arr[right]===0){
            return [arr[left],arr[right]]
        }else if(arr[left]+arr[right]>0){
            right--
        }else if(arr[left]+arr[right]<0){
            left++
        }
    }
}

//console.log(sumzero([-27,-4,-3,-2,-1,0,1,2,5,10,15]))

//takes a sorted array and counts the number of unique values across it
const countUniqueValues = (arr)=>{
    if(arr.length===0){
        return 0
    }
    let first=arr[0]
    let counter=1;
    for(let i of arr){
        if(i!==first){
            counter++;
            first=i
        }
    }
    return(counter)
}
// console.log(countUniqueValues([1]))
// console.log(countUniqueValues([]))
// console.log(countUniqueValues([-5,-4,-4,1,1,1,1,1,1,2,2,3,4,5,6,7,8,9,9,9,9,10,10,11]))


//averagePair
//takes a sorted array of integers and a target average. searches the array for a pair that's average 
//meets the target average

const averagePair = (arr1,avg)=>{
    if(arr1.length<2) return false
    let left=arr1[0];
    let right=arr1[arr1.length-1];
    let lcounter=0
    let rcounter=arr1.length-1
    while(left<right){
        if((left+right)/2>avg){
            rcounter-=1;
            right=arr1[rcounter]
        }else if((left+right)/2 <avg){
            lcounter+=1
            left=arr1[lcounter]
        }else {
            return true
        }
    }
    return false
}
// console.log(averagePair([1,2,3],2.5))


//isSubsequence
//takes two strings and checks whether the first string appears as a subsequence in the second string without a change in order
const isSubsequence = (str1,str2)=>{
    if(str1.length>str2) return false
    let lcounter=0;
    for(let i=str1.length;i <= str2.length;i++){
        if(str1===str2.substring(lcounter,i)) return true
        else lcounter+=1
        }
    return false
}
console.log(isSubsequence('hello','hello world'))
console.log(isSubsequence('sing','sting'))
console.log(isSubsequence('abc','abracadabra'))
console.log(isSubsequence('abc','acb'))