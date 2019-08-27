function generateNumber(min, max){  //generates random integer from set range (found good solution on learnjavascript)
  let randNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randNumber);
}

function generateArr(n){ //generates array with set quantity of integers 
  let myArr= []
  for (i = 0; i < n; i++){
    myArr.push(generateNumber(1, 100))
  }
  return myArr
}

function getNumbersQuantity(){ //generates object with quantity of every integer in array
  let newObj = {}
  let newArr = generateArr(100)
  
  newArr.forEach(function(item, i){
      if(newObj[item]){
        newObj[item] += 1 
      } else {
        newObj[item] = 1   
      }
    }
  )
  return newObj
}

function getUniqueNumbers(){ //finds unique integers (keys with value '1')
  let objectWithNumbers = getNumbersQuantity()
  let arrWithUniqueNumbers = []
  for (key in objectWithNumbers){
       if (objectWithNumbers[key]==1){
         arrWithUniqueNumbers.push(+key)
       }
    }
  console.log(arrWithUniqueNumbers)
}

getUniqueNumbers()
