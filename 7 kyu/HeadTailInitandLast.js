function head(arr) {
    let a = arr[0]
    return a
}

function tail(arr) {
    let a = arr.slice()
    a.shift()
    return a
}

function init(arr) {
    let a = arr.slice()
    a.pop()
    return a
}

function last(arr) {
    let a = arr[arr.length - 1]
    return a
}

let b = [1,2,3,4,5,6]
console.log(head(b))
console.log(tail(b))
console.log(init(b))
console.log(last(b))