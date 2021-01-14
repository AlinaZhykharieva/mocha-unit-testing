class Multiplication {
  constructor() {

  };

  multiplicationOfNumbers(...args) {
    let result;
    if (args.length === 0) {
      return result = 0;
    } else {
      result = 1;
      for (const arg of args) result *= arg;
      return result;
    }
  };
}

module.exports = Multiplication;
