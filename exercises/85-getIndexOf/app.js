
function getIndexOf(character, string) {
    
    for (let i = 0; i < string.length; i++) {
        
        if (character === string[i]) {
            return i;
            
        }
    }

}



var output = getIndexOf('a', 'I am a hacker');
console.log(output)