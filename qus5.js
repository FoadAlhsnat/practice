function removeNb (n) {
  let sum=0;
  let arrOfpsonumbers=[];
  for(let i=1;i<=n;sum+=i,i++);
  for(i=0;i<n;i++){
    for(j=i+1;j<=n;j++){
      if(i*j==sum-i-j){
        let posnumbers=[]
        posnumbers.push(i)
        posnumbers.push(j)
        arrOfpsonumbers.push(posnumbers)
      }
    }
  }
  let length=arrOfpsonumbers.length
  for(let i=0;i<length;i++){
    arrOfpsonumbers.push([arrOfpsonumbers[i][1],arrOfpsonumbers[i][0]])
  }
  console.log(arrOfpsonumbers);
}

removeNb(10000000)
//arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]