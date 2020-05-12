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
