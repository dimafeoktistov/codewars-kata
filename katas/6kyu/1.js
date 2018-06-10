// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
//
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

const names = [];
let str = null;

const likes = names => {
  if (names.length === 0) {
    str = 'no one likes this';
    return str;
  } else if (names.length === 1) {
    str = `${names[0]} likes this`;
    return str;
  } else if (names.length === 2) {
    str = `${names[0]} and ${names[1]}  like this`;
    return str;
  } else if (names.length === 3) {
    str = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    return str;
  } else if (names.length > 3) {
    const num = names.length - 2;
    str = `${names[0]}, ${names[1]} and ${num} others like this`;
    return str;
  }
};

likes(['Alex', 'Jacob', 'Mark', 'Max']);
console.log('str', str);
