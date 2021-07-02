function countAllCharacters(para1) {
    let answer = {};
    let string = para1.split("")
    for (let index = 0; index < string.length; index++) {
        const Letter = string[index]
        if (answer[Letter] === undefined) {
            answer[Letter] = 1
        }
        else answer[Letter.toLowerCase()] = answer[Letter.toLowerCase()] + 1;{}

    }
    return answer;
}




let output = countAllCharacters('banana');
console.log(output)