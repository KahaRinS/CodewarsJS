function combination(digit){
    return digit*(digit-1)/2;
}

function getParticipants(handshakes){
    if (handshakes==0) {
        return 0;
    }
    let i = 2;
    while (true) {
        if (combination(i) >=handshakes) {
            return i;
        }
        i++;
    }
}

console.log(factorial(171));