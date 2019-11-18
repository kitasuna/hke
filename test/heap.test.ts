import { ins, getParentIndex } from "../heap"

test('adds 1 + 2 to equal 3', () => {
  expect( 1 + 2 ).toBe(3);
});

test('ins should add something to the heap', () => {
  const h = [10]
  const r0 = ins(h)(5)
  const r1 = ins(r0)(11)
  const r2 = ins(r1)(3)
  const r3 = ins(r2)(27)
  const r4 = ins(r3)(4)
  const r5 = ins(r4)(1)
  const r6 = ins(r5)(16)
  const r7 = ins(r6)(28)
  console.dir(r7)
  expect(r4.length).toEqual(2)
})

test('getParentIndex should return undefined when asked to get parent of root element', () => {
  expect(getParentIndex(0)).toEqual(undefined)
})

test('getParentIndex should return 1 when asked to get parent of element at 3 and 4', () => {
  expect(getParentIndex(3)).toEqual(1)
  expect(getParentIndex(4)).toEqual(1)
})

test('getParentIndex should return 2 when asked to get parent of element at 5 and 6', () => {
  expect(getParentIndex(5)).toEqual(2)
  expect(getParentIndex(6)).toEqual(2)
})
