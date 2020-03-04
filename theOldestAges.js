function twoOldestAges(ages){
let result = []
let copyofage = ages.sort((a, b)=>{
  return b - a
})
copyofage.splice(2)
copyofage.sort((a, b)=>{
  return a - b
})
return copyofage
}

twoOldestAges(ages)

//short answer

function twoOldestAges(ages){
return ages.sort((a,b)=>{return a-b}).slice(-2)
}


