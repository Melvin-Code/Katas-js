const pattern = n =>
  Array.from({ length: n }, (_, index) =>
    String(index + 1).repeat(index + 1)
  ).join('\n')