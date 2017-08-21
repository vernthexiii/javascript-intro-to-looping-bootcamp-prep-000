function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if(i === 0) {array.push('');}
    else if(i === 1) {array.push(`"I am 1 strange loop."`);}
    else{array.push(`"I am ${i} strange loops."`)}
  }
  return array;
}
function whileLoop(n) {
  var countdown = n;
  while(countdown > 0) {
    console.log(--countdown);
  }
  return 'done';
}
function doWhileLoop(array) {
  do {
    array = array.slice(array.length - 1);
  } while (array.length > 0)
  return array;
}
