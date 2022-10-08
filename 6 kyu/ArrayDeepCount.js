function deepCount(a){
    let i = 0;
    i = i + a.length
    for (let e of a){
        if (typeof(e) == "object"){
            i = i + deepCount(e)
        }
    }
    return i
}

let a=[[[[[[[[[]]]]]]]]]
console.log(deepCount([[[[[[[[[]]]]]]]]]))