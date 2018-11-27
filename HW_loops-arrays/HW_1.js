var arrNum = [1, 2, 3, 4, 5, 77, -7, 8],
    result = '',
    i = 0;

//вывести элементы с шагом через 2 элемента

for(i = 0;  i < arrNum.length; i +=3){
    result += arrNum[i] + ' ';
}

console.log('Every 3rd element in array: '+ result);
  
//вывести элементы, которые больше, чем сумма первого и последнего элементов

var lastElem= arrNum[arrNum.length - 1],
    sumArr = arrNum[0] + lastElem,
    result = '';

for(i = 0; i < arrNum.length; i += 1){
    if (arrNum[i] > sumArr)
    result += arrNum[i] + ' ';
}

console.log('Elems bigger than sum of first and last elems: '+ result)

//вывести среднее арифметическое

var sumAll = 0,
    result = '';

for(var i = 0; i < arrNum.length; i += 1){
    sumAll += arrNum[i];
    result = (sumAll/arrNum.length).toFixed(2);
}
console.log('Average of \'arrNum\' array: ' + result);
