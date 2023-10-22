function nameIt(num,num2) {
    
let arr = [];
let test;
for (let index = 0; index < num2; index++) {
    test = num +=1
    arr.push(test)


}
let results = arr.reduce((a,b)=>a+b,0)
console.log(results);

}

nameIt(10,100)



var majorityElement = function(nums) {
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(!(nums[i] in obj)){
            console.log(nums[i])
            obj[nums[i]] = 0;
            console.log(obj)
            i++
        }
    
        if(nums[i] in obj){
            obj[nums[i]] = obj[nums[i]] +=1
            console.log(obj)
            i++
        }
    }
        
            console.log(obj)
};


majorityElement([6,6,7,7,8]);