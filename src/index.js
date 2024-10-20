module.exports = function check(str, bracketsConfig) {
  let BRACKETS = {};
  let OPEN_BRACKETS = Object.values(BRACKETS);
  let stack = [];

  bracketsConfig.forEach(element => {
    BRACKETS[element[1]] = element[0];
    OPEN_BRACKETS.push(element[0]);
  });

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topSymbol = stack[stack.length - 1];

    if (topSymbol && BRACKETS[currentSymbol] === topSymbol) {
      stack.pop();
    } else {
      if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }
      } 
    }
  }
  return stack.length === 0;
}