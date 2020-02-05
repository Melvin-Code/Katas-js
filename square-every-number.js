function squareDigits(num){
    let nums = num.toString()
    nums.split('') 
    let arr = []
    for (let i = 0; i <= nums.length; i++){//may the code be with you
    arr.push(nums[i]*nums[i])
    }
    arr.pop()
   return Number(arr.join(''))
  
  }