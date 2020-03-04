function twoOldestAges(ages) {
  let result = []
  let copyofage = ages.sort((a, b) => {
    return b - a
  })
  copyofage.splice(2)
  copyofage.sort((a, b) => {
    return a - b
  })
  return copyofage
}

twoOldestAges(ages)

//short answer

function twoOldestAges(ages) {
  return ages.sort((a, b) => {
    return a - b
  }).slice(-2)
}


function isPrime(num) {
  if (num <= 1) {
    return false
  }
  if (num = 2) {
    return true
  } else if (num > 1 && num % 2 !== 0) {
    if (num % 3 !== 0) {
      if (num % 5 !== 0) {
        return true
      }
    }
  } else {
    return false
  }

}

function isPrime(num) {
  let square = Math.ceil(Math.sqrt(num));
  let prime = true;
  if (num < 2) {
    return false
  } else if (num === 2) {
    return true
  }

  for (let i = 2; i < square + 1; i++) {
    if (num % i === 0) {
      prime = false
    }
  }
  return prime;
}