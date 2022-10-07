function isIsogram(str){
    str = str.toLowerCase();
    for (let i of str) {
        if (str.includes(i,str.search(i)+1)) {
            return false;
        }
    }
    return true;
}

console.log(isIsogram(''));