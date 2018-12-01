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
