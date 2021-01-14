class Addition {
    constructor() {

    };

    additionOfNumbers(...args) {
        let result = 0;
        if (args.length === 1) {
            return args[0];
        } else {
            for (let arg of args) result += arg;
            return result;
        }
    };
}

module.exports = Addition;