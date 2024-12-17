const validate = (input) => {
  const inputArr = input.trim().split("\n");
  // const regName = /^([a-zA-Z])(?=.*[0-9])[a-zA-Z]/;
  const regName = /^[a-zA-Z][a-zA-Z]*[0-9]+[a-zA-Z]*/;
  let result = "";
  for (let i = 1, len = +inputArr[0]; i <= len; i++) {
    if (regName.test(inputArr[i])) result += "Accept\n";
    else result += "Wrong\n";
  }
  return result;
};

const input = `
7
H99h8
Ooook
Hhhh666h6
666Hhhh
ABCD
Meituan
6666
`;

console.log(validate(input));
