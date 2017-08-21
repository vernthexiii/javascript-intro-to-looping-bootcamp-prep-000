function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if(i === 0) {array.push('');}
    else if(i === 1) {array.push(`"I am 1 strange loop."`);}
    else{array.push(`"I am ${i} strange loops."`)}
  }
  return array;
}
function whileLoop(n) {
  n = Math.random() > 0
  while(n) {
    console.log(n)
  }
  return 'done';
}
function doWhileLoop(array) {

}
