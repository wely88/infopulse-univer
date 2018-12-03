//Функция spendDinnerCals считает количество потраченных кКал в зависимости от видов спорта, которыми занимался пользователь в течение дня
function spendDinnerCals(mySportCal){
    var sportData = {
        "Бег" : 560,
        "Плавание" : 390,
        "Хотьба" : 125,
        "Разговор по телефону" : 44,
        "Стриптиз" : 360
        }, 
        spendCals = 0;
    for(var sportItem in mySportCal){
      spendCals += mySportCal[sportItem] * sportData[sportItem];
    }
   return Math.round(spendCals);
}
    
  var mySport = {
    "Хотьба" : 2,
    "Разговор по телефону" : 0.5,
    "Стриптиз" : 1.5
    }
  
console.log("Портачено "+ spendDinnerCals(mySport) + " ккал")

var myCals = getDinnerCals(myDinner);

//Функция howSpendCals считает, сколько нужно заниматься разными видами спорта, чтоб сжечь съеденное
function howSpendCals(mySport){
  var sportData = {
        "Бег" : 560,
        "Плавание" : 390,
        "Хотьба" : 125,
        "Разговор по телефону" : 44,
        "Стриптиз" : 360
        }, 
        spendCalsTime = 0;
  
  for(var sportItem in sportData){
    spendCalsTime = mySport / sportData[sportItem]
    console.log("Для того, чтоб потратить съеденные калории, Вам необходимо: " + sportItem + ", минимум " + spendCalsTime.toFixed(1) + " часа.")
  }
  
}

howSpendCals(myCals)
