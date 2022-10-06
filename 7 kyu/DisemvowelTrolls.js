// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

let str = "Abracodabra";
function disemvowel(str) {
    let temporaryStr = '';
    var vowels = new Array('a','A','E','e','I','i','O','o','U','u');
    for (let i of str) {
        let isVowel = false;
        for (let vowel of vowels) {
            if (i == vowel) {
                isVowel=true;
                break;
            }
        }
        if (!isVowel) temporaryStr = temporaryStr + i;
    } 
    return temporaryStr;
  }
console.log(disemvowel(str));

function disemvowel1(str) {
    return str.replace(/[aeiou]/ig, '');
}

console.log(disemvowel1(str));