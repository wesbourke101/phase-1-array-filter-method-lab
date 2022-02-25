// Code your solution here

function findMatching(arryOfSomething, stringOfSomething) {
    const results = arryOfSomething.filter(arrayNames => arrayNames.toLowerCase() === stringOfSomething.toLowerCase());
    return results;
}

function fuzzyMatch(arryOfSomething, stringOfSomething) {
    const results = arryOfSomething.filter(arrayLetter => arrayLetter.charAt(0) === stringOfSomething.charAt(0));
    return results;
}

function matchName(arryOfSomething, stringOfSomething) {
    const results = arryOfSomething.filter(stringCompare => stringCompare.name === stringOfSomething)
    return results
}