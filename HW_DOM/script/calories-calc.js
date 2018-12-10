function getDinnerCals(){
	var firstDishWeigth = document.getElementById('firstDish__itemWeightData').value,
		secondDishWeigth = document.getElementById('secondDish__itemWeightData').value,
		drinkWeigth = document.getElementById('drink__itemWeightData').value,
		firstDishItem = document.getElementById('firstDish__itemValues').value,
		secondDishItem = document.getElementById('secondDish__itemValues').value,
		drinkItem = document.getElementById('drink__itemValues').value,
		result = document.getElementById('result__string')
		
	
	var foodData = {
		"Бограч" : 230,
		"Бульон куриный" : 110,
		"Окрошка" : 170,
		"Суп с клецками" : 183,
		"Грибная юшка" : 130,
        "Гуляш по-украински" : 250,
        "Куриная отбивная с гречкой" : 243,
        "Котлета с жареной картошкой" : 310,
        "Нежное пюре с сосисками" : 280,
        "Узвар" : 37,
        "Кофе" : 89,
        "Чай" : 50,
        "Coca-cola" : 150
		}
	
	
	result.value = Math.round(
	(parseInt(foodData[firstDishItem]) * firstDishWeigth) / 100 + 
	parseInt((foodData[secondDishItem]) * secondDishWeigth) / 100 +
	parseInt((foodData[drinkItem]) * drinkWeigth) / 100)
	
}

var btn = document.getElementById('calculate__btn')
btn.onclick = getDinnerCals
