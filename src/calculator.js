class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    return this.a + this.b
  }
  
  subtract() {
    return this.a - this.b
  }
  
  multiply() {
    return this.a * this.b;
  }
  
  divide() {
    return this.a / this.b;
  }
}

const newCalculator = new Calculator(10, 20);

console.log(newCalculator.add());
console.log(newCalculator.subtract());
console.log(newCalculator.multiply());
console.log(newCalculator.divide());