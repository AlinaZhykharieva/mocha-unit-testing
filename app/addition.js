class Addition {
  constructor() {

  };

  additionOfNumbers(...args) {
    if (args.length === 0) {
      throw new Error(`No arguments passed to function!`);
    } else {
      return args.reduce((a, b) => a + b);
    }
  }
}

module.exports = Addition;
