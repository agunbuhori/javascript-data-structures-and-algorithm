function validParentheses(parentheses: string) {
  const dict: any = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stacks = [];

  for (let i = 0; i < parentheses.length; i++) {
    if (dict[parentheses[i]]) {
      stacks.push(dict[parentheses[i]]);
    } else if (stacks.pop() !== parentheses[i]) {
      return false;
    }
  }

  return stacks.length === 0;
}

console.log(validParentheses("{}[]()"));
console.log(validParentheses("[{}]"));
console.log(validParentheses("[()]"));
console.log(validParentheses("{([])}"));
console.log(validParentheses("{([})}"));
