 function increment(n) {
    return ++n;
  }
  
  function decrement(n) {
    return --n;
  }

  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }

  
function add(a, b) {
    return a + b;
  }
  
  
  function subtract(a, b) {
    return a - b;
  }
  
 
  function multiply(a, b) {
    return a * b;
  }
  
 
  function divide(a, b) {
   
    if (b !== 0) {
      return a / b;
    } else {
      
      return "Error: can't divide by zero";
    }
  }