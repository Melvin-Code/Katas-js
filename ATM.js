// short answer
function solve(n) {
    let counter = 0;
    [500, 200, 100, 50, 20, 10].forEach(item => {
      counter += Math.floor(n / item)
      n = n % item
    })
    return n ? -1 : counter
  }
//   Long ass answer
function solve(n) {
    let a = 10
    let b = 20
    let c = 50
    let d = 100
    let e = 200
    let f = 500 
  
    let result = []
    let counter = []
    let substraction = [] 
    
    if(n){
    if (n === a || n === b || n === c || n === d || n === e || n === f) {
     result.push(1)
     return Number(result)
    }
    
    else if ((n) > 0 ) {
        
        counter.push(n)
        substraction.push(1)
        let i = 500;
        let z = 200;
        let y = 100;
        let x = 50;
        let w = 20;
        let v = 10;
        while (i <= Number(counter)) {
        i+=500;
        }
        console.log("i")
        counter.push(Number(counter) - (i-500))
        counter.shift()
        substraction.push((i / 500 - 1) + Number(substraction[0]))
        substraction.shift()
        console.log(counter)
        console.log(substraction)
        if(counter >= 200){
          while (z <= Number(counter)) {
        z+=200;
        }
        console.log("z")
        console.log(counter)
        counter.push(Number(counter) - (z-200))
        counter.shift()
        substraction.push((z / 200 - 1) + Number(substraction[0]) )
        substraction.shift()
        console.log(z)
        console.log(substraction)
        console.log(counter)
        } if(counter >= 100){
          while (x <= Number(counter)) {
        x+=100 + 50 ;
        }
        console.log("x")
        console.log(x)
        console.log(counter)
        counter.push(Number(counter) - (x-100))
        counter.shift()
        substraction.push((x / 100 - 1) + Number(substraction[0]) )
        substraction.shift()
        console.log(substraction)
        console.log(counter)
        }  if(counter >= 50){
          while (y <= Number(counter)) {
        y+=50;
        }
        console.log("y")
        counter.push(Number(counter) - (y-50))
        counter.shift()
        console.log(substraction[0])
        substraction.push((y / 50 - 1) + Number(substraction[0]) )
        substraction.shift()
        console.log(substraction)
        }  if(counter >= 20){
          while (w <= Number(counter)) {
        w+=20;
        }
        console.log('w')
        counter.push(Number(counter) - (w-20))
        counter.shift()
        substraction.push((w / 20 - 1) + Number(substraction[0]) )
        substraction.shift()
        }  if(counter >= 10){
          while (v <= Number(counter)) {
        v+=10;
        }
        console.log("v")
        counter.push(Number(counter) - (v-10))
        counter.shift()
        substraction.push((v / 10 - 1) + Number(substraction[0]) )
        substraction.shift()
        } 
        if (n % 10 !== 0) {
         result.push(-1)
        
        return Number(result)
        }
        
        }
    }
     
        console.log(result)
    console.log(counter)
    let numerize = Number(substraction)
     result = numerize
   return result -1
  }