function duplicateEncode(word){
    word = word.toLowerCase();
    let newWord = '';
    for (let i of word) {
        let number = 0;
        for (let e of word) {
            if (i==e) {
                number++
            }
        }
        if (number>1) {
            newWord = newWord + ')'
        }
        else {
            newWord = newWord + '('
        }
    }
    return newWord
}

console.log(duplicateEncode('(( @'))
