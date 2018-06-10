// Task:
// Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."
//
// Note:
// You will always receive a positive integer.
let str = null;
const countSheeps = num => {
  str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

countSheeps(1);
console.log(str);
countSheeps(2);
console.log(str);
countSheeps(3);
console.log(str);
