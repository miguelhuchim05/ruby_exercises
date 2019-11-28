const numbers = [[6, 7, 8], 
                 [1, 4, 29], 
                 [4, 78, 12]];
let numbersRotate = [];
const numbersLength = numbers.length;
let rowSum = 0
let rowSumMax = 0
let columnSum = 0
let columnSumMax = 0

const sumRow = (accumulator, currentValue) => accumulator + currentValue;
const transpose = array => array[0].map((columnValue, indexColumn) => array.map((rowValue, indexRow) => array[indexRow][indexColumn]));

const maxSumArray = numbers =>{
  for(let counter = 0; counter < numbersLength; counter++){
  rowSum = numbers[counter].reduce(sumRow);
  if(rowSum > rowSumMax){rowSumMax = rowSum}

  numbersRotate = transpose(numbers);
  columnSum = numbersRotate[counter].reduce(sumRow);
  if(columnSum > columnSumMax){columnSumMax = columnSum}
  }

  return rowSumMax > columnSumMax ? rowSumMax : columnSumMax;
}

console.log(maxSumArray(numbers));
