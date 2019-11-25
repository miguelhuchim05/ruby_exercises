const stuffs = ["13.09.2017", "13.aa.2018", "44.09.2018", "13.09.7"];
let digits = [];
let sum = 0;

const numbers = stuffs.filter(element =>{
  digits = element.split('.');
  return !digits.some(element => isNaN(element));
});

numbers.forEach((element, index) => {
  digits = element.split('.');
  sum += parseInt(digits[index]);
});

console.log(sum);
