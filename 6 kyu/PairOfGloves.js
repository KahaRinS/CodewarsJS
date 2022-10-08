function numberOfPairs(glove){
    let gloves = glove.slice()
    let color = ""
    let fullCount = 0
    while (gloves.length!=0){
        color = gloves[0]
        let count=0
        while(gloves.indexOf(color)!=-1) {
            gloves.splice(gloves.indexOf(color),1)
            count++
        }
        if(count!=1){
            fullCount=fullCount + (count-count%2)/2
        }
    }
    return fullCount
}



let p = ['red','green','blue']
console.log(numberOfPairs(p))