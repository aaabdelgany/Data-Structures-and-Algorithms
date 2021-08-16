//Frequency Counter

const same = (arr1,arr2) => {
    const squared = {}
    for (let item of arr1){
        if(squared[item]){
            squared[item]+=1
        }else{
             squared[item]=1;
        }
    }
    for(let item of arr2){
        const squaredItem = Math.sqrt(item)
        squared[squaredItem]-=1
    }
    for(let freq of Object.values(squared)){
        if(freq!==0){
            return false
        }
    }
    return true
}

same([1,2,3],[4,1,9])
same([1,4,9],[1,16,81])
same([1,2,3,4,5],[6])
same([1,2,3],[1,4,7])


const anagram = (str1,str2)=>{
    if(str1.length!==str2.length){
        return false
    }
    const counter = {};
    for (let char of str1){
        if(counter[char]){
            counter[char]+=1;
        }else{
            counter[char]=1;
        }
    }
    for(let char of str2){
        if(counter[char]){
            counter[char]-=1;
        }else{
            return false;
        }
    }
    for (let char of Object.values(counter)){
        if(char!==0){
            return false
        }
    }
    return true
}

// anagram('','')
anagram('aaz','zza')
anagram('anagram','nagaram')