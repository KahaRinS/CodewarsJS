function explode(s) {
    explodeStr = '';
    for (let i of s) {
        for (let e = 0; e < i; e++) {
            explodeStr = explodeStr + i;
        }
    }
    return explodeStr;
  }

  console.log(explode('3029'));