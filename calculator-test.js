values = (amount, years, rate) => {
  return {
    amount, years, rate
  }
}

result1 = calculateMonthlyPayment(values(10000, 4, 7.25))
result2 = calculateMonthlyPayment(values(7000, 5, 8))

it('should calculate the monthly rate correctly', () => {
  expect(result1).toEqual('240.62')
  expect(result2).toEqual('141.93')
});


it("should return a result with 2 decimal places", () => {
  decimal1 = result1 - Math.floor(result1)
  decimal2 = result2 - Math.floor(result2)
  expect(decimal1).toBeCloseTo('0.62')
  expect(decimal2).toBeCloseTo('0.93')
  
});

it('should reject invalid characters', () => {
  expect(() => getCurrentUIValues('', 4, 7.25)).toThrowError()
  expect(() => getCurrentUIValues('hi', 4, 7.25)).toThrowError()
  expect(() => getCurrentUIValues('10000', 4, 7.25)).toThrowError()
  expect(() => getCurrentUIValues(10000, '', 7.25)).toThrowError()
  expect(() => getCurrentUIValues(10000, 'hi', 7.25)).toThrowError()
  expect(() => getCurrentUIValues(10000, '4', 7.25)).toThrowError()
  expect(() => getCurrentUIValues(10000, 4, '')).toThrowError()
  expect(() => getCurrentUIValues(10000, 4, 'hi')).toThrowError()
  expect(() => getCurrentUIValues(10000, 4, '7.25')).toThrowError()
})
