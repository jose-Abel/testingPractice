class Calculator {

    add(...args) {
        return args.reduce((acc, cur)=> {
            return acc + cur;
        });
    }

    subtract(...args) {
        return args.reduce((acc, cur)=> {
            return acc - cur;
        });
    }

    divide(...args) {
        return args.reduce((acc, cur)=> {
            return acc / cur;
        });
    }

    multiply(...args) {
        return args.reduce((acc, cur)=> {
            return acc * cur;
        });
    }
}

module.exports = Calculator;