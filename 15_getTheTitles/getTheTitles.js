const getTheTitles = function(libro) {
    let titles = []
    for( let i = 0; i < libro.length; i++) {
         titles.push(libro[i].title);
    };
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
