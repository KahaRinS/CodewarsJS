function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays == null) return 0
    if (arrayOfArrays.length == 0) return 0
    let arrayOfLengths = []
    for (let i of arrayOfArrays) {
        if (i== null) return 0
        if (i.length==0) return 0
        arrayOfLengths.push(i.length)
    }
    arrayOfLengths.sort((a, b) => a - b)
    for (let i = 0; i < arrayOfLengths.length; i++) {
        if ((arrayOfLengths[i+1]-arrayOfLengths[i])>1) {
            return (arrayOfLengths[i+1] + arrayOfLengths[i])/2
        }
    }
}

console.log(getLengthOfMissingArray([[3, 1, 0, 0, 3],
    [2],
    [3, 1, 2, 1, 1, 1, 4, 3, 3, 0],
    [0, 1],
    [3, 2, 2, 3, 0, 1, 0],
    [0, 2, 0],
    [4, 3, 2, 3, 2, 0, 1, 0, 2],
    [0, 0, 4, 1, 2, 1],
    [4, 4, 4, 1, 3, 2, 3, 2]]))
  