function sortByBit(arr) {
    const countBits=(num)=>{
        return [...(num).toString(2)].reduce((acc,el)=> el==='1' ? acc+1 : acc, 0)
    }
  return arr.sort((a,b)=> countBits(a)-countBits(b) ||  a-b);
}