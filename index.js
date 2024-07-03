// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name){
    return array.filter((element) => element.toLowerCase() === name.toLowerCase())
}

console.log(fuzzyMatch(drivers, 'B'))

function fuzzyMatch(array, letter){
    return array.filter((element) => element.toLowerCase().substring(0, letter.length) === letter.toLowerCase())
}

function matchName(array, string){
    return array.filter((array) => array.name === string)
}
