const palindromes = function (string) {
    string = string.toUpperCase().replace(/[^a-zA-Z0-9]/g, '');

    let palindrome = string.split("").reverse().join("");

    if (palindrome == string) {
        return true;
    } 
        return false;
};

// Do not edit below this line
module.exports = palindromes;

