function encode(string) {
  const vowelsArr = ["a", "e", "i", "o", "u"]
  return string.split('').map(ele => ele = vowelsArr.includes(ele) ? vowelsArr.indexOf(ele) + 1 : ele).join('')

}

function decode(string) {
  const vowelsArr =
  {
    "1": "a",
    "2": "e",
    "3": "i",
    "4": "o",
    "5": "u"
  }
  return string.split('').map(ele => ele = vowelsArr[ele] ? vowelsArr[ele] : ele).join('')
}

console.log(encode('hello'));
console.log(decode('h2ll4'));