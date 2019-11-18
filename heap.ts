type Heap<A> = A[]

export const ins = <A>(h: Heap<A>) => (elem: A) => {
  const newHeap = h.concat(elem)

  let curIndex = newHeap.length - 1
  let sorted = false
  while(!sorted) {
    let parentIndex = getParentIndex(curIndex)

    if(parentIndex === undefined) {
      console.dir("parent undefined, returning")
      sorted = true
      break
    }

    if(newHeap[curIndex] < newHeap[parentIndex]) {
      const tmp = newHeap[parentIndex]
      newHeap[parentIndex] = newHeap[curIndex]
      newHeap[curIndex] = tmp
      curIndex = parentIndex
    } else {
      console.log(`Cur: ${newHeap[curIndex]}, Par: ${newHeap[parentIndex]}`)
      sorted = true
      break
    }
  }

  console.dir(newHeap)
  return newHeap
}


/*
export const sort = <A>(h: Heap<A>): Heap<A> => {
  h.forEach((elem, index) => {
    if(getParentIndex(index) === undefined) {

    }
  })
}
*/


export const getParentIndex = (index: number) => {
  if(index === 0) {
    return undefined
  } 

  return Math.ceil((index-2) / 2)
}

let xs: Heap<number> = []
xs = ins(xs)(10)
 xs = ins(xs)(5)
 xs = ins(xs)(42)
 xs = ins(xs)(1)
 xs = ins(xs)(100)
 xs = ins(xs)(11)
console.dir(xs)
console.dir("^^ heap")


