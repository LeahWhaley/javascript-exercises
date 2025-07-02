const findTheOldest = function(people) {
    people.sort((a, b) => {
        let ageA = 0;
        let ageB = 0;
        if ("yearOfDeath" in a === false) {
            ageA = new Date().getFullYear() - a.yearOfBirth;
        } else {
            ageA = a.yearOfDeath - a.yearOfBirth;
        }

        if ("yearOfDeath" in b === false) {
            ageB = new Date().getFullYear() - b.yearOfBirth;
        } else {
            ageB = b.yearOfDeath - b.yearOfBirth;
        }
        return ageB - ageA;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
