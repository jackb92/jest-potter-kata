const basket = require('./basket');
const { TestScheduler } = require('jest');

//Test has become redundent
// test('Basket total is equal to number of books * 8', () => {
//   expect(basket(8, 5)).toBe(40)
// })

//Test has become redundent
//Initally had 'uniqueBookCount function in seperate file to basket
// test('Get unique book count', () => {
//   expect(uniqueBookCount(['book1', 'book1', 'book3', 'book3'])).toBe(2)
// })

test('One book in basket equals 8', () => {
  expect(basket(['book1'])).toBe(8)
})

test('basket with multiple of same book returns 0% discount', () => {
  expect(basket(['book1', 'book1', 'book1','book1','book1'])).toBe(40)
})

test('Two unique books in basket applies 5% discount', () => {
  expect(basket(['book1', 'book2'])).toBe(15.2)
})

test('Three unique books in basket applies 10% discount', () => {
  expect(basket(['book1', 'book2', 'book3'])).toBe(21.6)
})

test('Four unique books in basket applies 20% discount', () => {
  expect(basket(['book1', 'book2', 'book4', 'book3'])).toBe(25.6)
})

test('Five unique books in basket applies 25% discount', () => {
  expect(basket(['book1', 'book2', 'book3', 'book4', 'book5'])).toBe(30)
})

test('Only unique books get discount', () => {
  expect(basket(['book1', 'book1', 'book1', 'book3', 'book1'])).toBe(39.2)
})

// test('test', () => {
//   expect(basket(['book1', 'book1', 'book2', 'book2', 'book3', 'book3', 'book4', 'book5'])).toBe(39.2)
// })