/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/



const highest=string=>{
  let arrayOfWords=string.split(' ')
  console.log(arrayOfWords);
  let indexOFword;
  let maxcount=0
  for (let index = 0; index < arrayOfWords.length; index++) {
    let count=0
    j=0;
    while(j<arrayOfWords[index].length){
      count+=arrayOfWords[index].charCodeAt(j)-96
      j++
    }
    if(maxcount<count){
      maxcount=count;
      indexOFword=index;
    }
    console.log(maxcount);
  }
  console.log(arrayOfWords[indexOFword]);
  }


/*
function high(x){
    return x.split(' ').reduce((accum, current)=>{
        return score(current) > score(accum)? current:accum;  
    })
}

function score(word){
    return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
}



*/ 


  highest('take me to semynak')