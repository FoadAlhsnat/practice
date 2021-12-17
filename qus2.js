var countBits = function(n) {
  let count=0;
  let benNum=n.toString(2).split('')
  for(let i=0;i<benNum.length;i++){
    if(benNum[i]==='1')count++
  }
    
  return count;
};
console.log(countBits(1234)); 