const fibonacci = function(number) {
    let numString = Number(number);
    let previous = 0;
    let current = 1;

    if (numString < 0) {
        return "OOPS";
    } else if (numString != 0) {
        for (let i = 2; i <= numString; i++) {
            const next = previous + current;
            previous = current;
            current = next;
        };
        return current;
    };  
    return 0;
};

// Do not edit below this line
module.exports = fibonacci;
