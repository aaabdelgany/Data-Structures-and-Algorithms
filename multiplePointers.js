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
console.log(countUniqueValues([1]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-5,-4,-4,1,1,1,1,1,1,2,2,3,4,5,6,7,8,9,9,9,9,10,10,11]))