function duplicateEncode(word){
  let string=word.toLowerCase().split('')
  let charobj={}
  let newstr=""
  for(let i=0;i<string.length;i++){
    charobj[string[i]] = charobj[string[i]] + 1 || 1;
  }
  for(let i=0;i<string.length;i++){
    if(charobj[string[i]]>1){
      newstr+=')'
    }
    else newstr+="("
  }
  console.log(newstr);
}

//duplicateEncode("din")
duplicateEncode("Success")