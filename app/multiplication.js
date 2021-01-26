class Multiplication {
  constructor() {

  };

  multiplicationOfNumbers(...args) {
    if (args.length === 0) {
      throw new Error(`No arguments passed to function!`);
    } else {
      return args.reduce((a, b) => a * b);
    }
  }
}

module.exports = Multiplication;
