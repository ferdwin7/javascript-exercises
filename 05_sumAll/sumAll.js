const sumAll = function(...args) {
    if (args.length != 2) {
        return "ERROR";
    }
    else if (args.some(isNaN)) {
        return "ERROR";
    }
    else if (args.some((item) => item < 0)) {
        return "ERROR";
    }
    else if (args.some((item) => !Number.isInteger(item))) {
        return "ERROR";
    }
    else { 
        let finalSum = 0;
        if(parseInt(args[0]) < parseInt(args[1])) {
            startPoint = parseInt(args[0]);
            endPoint = parseInt(args[1]);
        }
        else {
            startPoint = parseInt(args[1]);
            endPoint = parseInt(args[0]);
        }
        console.log(startPoint, endPoint);
        for (let i = startPoint; i <= endPoint; i++) {
            finalSum = finalSum + i;
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
