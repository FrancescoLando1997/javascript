function multiplyByTwo(value) {
  let number = 2;

  return function inner(number){

    return value * number
  }

  return inner
}

console.log(multiplyByTwo(6)(3))