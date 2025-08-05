const getAge = function (birth, death) {
    if (!death) {
        death = 2025;
    };
    return death - birth;
};


const findTheOldest = function(people) {
    return people.reduce((age, person) => {
        const oldestAge = getAge(age.yearOfBirth,age.yearOfDeath);
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return oldestAge < currentAge  ? person : age;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
