function getE(n = 8) {
  const factorial = p => p < 2 ? 1 : p * factorial(p - 1)

  let sum = 0

  for (let i = 0; i < n; i++) sum += 1 / factorial(i)

  return sum
}

console.log(getE())
console.log(getE(16))
console.log(getE(32))
