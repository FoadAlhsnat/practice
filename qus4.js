/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').*/ 

const splitTo=str=>{
  str=str.length%2?str+'_':str
  splitstring=str.split('')
  let newarr=[]
  for(let i=0;i<splitstring.length;i+=2){
      newarr.push(splitstring[i]+splitstring[i+1])
 }
console.log(newarr);
}
splitTo('abc')
//abc
//abcd