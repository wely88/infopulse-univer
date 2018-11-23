var numArr = [1, 2, 3, 4, 5, 77, -7, 8],
    newArr = [],
    i;

// сформировать новый массив c чётными значениями
for(i = 0; i < numArr.length; i += 1){
  if(!(numArr[i]%2))
     newArr.push(numArr[i])
  }

console.log(newArr);