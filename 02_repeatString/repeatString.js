const repeatString = function(string, counter) {
    if(counter >= 0) {
        let concatenated = '';
        for (let i = 0; i <= counter - 1; i++) {
            concatenated = concatenated + string;

        }
        return concatenated;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
