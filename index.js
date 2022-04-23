function maxOccuringChar(str) {
  const charMap = new Map();
  for (const char in str) {
    console.log(str[char]);
    if (str[char] === ' ') continue;
    if (charMap.has(str[char])) {
      charMap.set(str[char], charMap.get(str[char]) + 1);
    } else {
      charMap.set(str[char], 1);
    }
  }
  console.log(charMap.entries());
}

const myStr = 'hello world';
console.log(maxOccuringChar(myStr));
