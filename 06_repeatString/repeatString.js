const repeatString = function(word, number) {
    let string = '';
    for (let i = 0; i < number; i++) {
        string += word;
    }
    return string;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
