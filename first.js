function a(){console.log(arguments.callee)}


(funciton() {
  var arr = [];
  for(var i=0 ; i < 10000 ; i++) {
    console.log(i);
    arr.push(i+i+i);
  }
  return arr;
})();
