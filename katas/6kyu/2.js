// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = iterable => {
  if (Array.isArray(iterable)) iterable = iterable.join('');
  const result =
    iterable.length == 0
      ? []
      : iterable.match(/(.)(?!\1+)/g).map(item => {
          return isNaN(parseInt(item)) ? item : parseInt(item);
        });
};

uniqueInOrder('AAAABBBCCDAABBB');
