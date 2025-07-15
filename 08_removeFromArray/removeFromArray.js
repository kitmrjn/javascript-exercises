function removeFromArray (array, ...args) {
        let result = [];

        array.forEach((index) => {
            if (!args.includes(index)) {
                result.push(index);
            } 
        });
            return result;
    };
    
// Do not edit below this line
module.exports = removeFromArray;
