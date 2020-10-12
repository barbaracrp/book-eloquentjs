
for(c = 0; c <= 100; c += 1){
  if(c % 3 == 0){
    console.log('Fizz')
  }
  if(c % 5 == 0){
    console.log('Buzz')
  }
  if(c % 3 == 0 & c % 5 == 0){
    console.log('FizzBuzz')
  }else {
    console.log(c)
  }
}
