module.exports = function check(str, bracketsConfig) {

    let contactConfig = [];

    for (let config of bracketsConfig) {
      contactConfig = contactConfig.concat(config)
    }
    bracketsConfig = contactConfig;

    let bracketIndex;
    const stack = [];

    for (let bracket of str) {
      bracketIndex = bracketsConfig.indexOf(bracket);

      if (bracketsConfig[bracketIndex] === bracketsConfig[bracketIndex +1]) {

          if (stack[stack.length - 1] !== bracketIndex) {
            stack.push(bracketIndex);
          }else {
            stack.pop()
          }
      } else {
        if (bracketIndex % 2 === 0) {
          stack.push(bracketIndex + 1)
        } else {
          if (stack.pop() !== bracketIndex) {
            return false
          }
        }
      }
    }
    return stack.length === 0
  }
