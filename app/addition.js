class Addition {
  constructor() {

  };

  additionOfNumbers(...args) {
    if (args.length === 0) {
      return 0;
    } else {
      return [...args].reduce((a, b) => a + b);
    }
  };
}

module.exports = Addition;
