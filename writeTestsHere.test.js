//
const func1 = require('./1.js');
describe('Main', () => {
  test('getSum', () => {
    expect(func1([1,2,3])).toBe(6)
    expect(func1([4,1,2])).toBe(7)
    expect(func1([1,0,10])).toBe(11)
  })
})
 /* test("Get an object's values using a key", () => {
    const obj = {
      'James':'1000',
      'Emma':'500',
      'Robert':'200'
    }
    expect(funcEasy2(obj, 'Robert')).toBe('200')
    expect(funcEasy2(obj, 'James')).toBe('1000')
    expect(funcEasy2(obj, 'Emma')).toBe('500')

  })

  test("A given number's index in a 2D array", () => {
    const arr = [[1, 2, 3], [4, 5, 6], [7,8,9]]
    expect(funcEasy3(arr, 3)).toBe(0)
    expect(funcEasy3(arr, 9)).toBe(2)
    expect(funcEasy3(arr, 4)).toBe(1)
    expect(funcEasy3(arr, 11)).toBe(undefined)
  })
*/