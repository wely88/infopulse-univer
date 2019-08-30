class List{
	constructor(sSelector){
		this.list = document.querySelector(sSelector)
		this.addTxt = this.list.querySelector(".header-form")
		this.addBtn = this.list.querySelector(".header-button")
		this.delBtn = this.list.querySelectorAll(".item-btn")
		this.itemsList = this.list.querySelectorAll(".item")
		this.itemsContainer = this.list.querySelector(".items-container")
		this.createEvents()
	}
		
	addNewItem(event){
		event.preventDefault()
		let newItem = this.addTxt.value
		
		if (!newItem){
			alert("Text field is empty. Add new goal, please!")
		} else {
			let newLi = document.createElement("li")  //other method to create a new list item is to clone some unshown li object (created before in html) and just change text value to newItem 
			newLi.classList.add("item")
			newLi.onclick = this.markEvent.bind(this)
			let newSpan = document.createElement("span")
			newSpan.classList.add("item-text")
			newSpan.insertAdjacentText("afterBegin", newItem)
			let newCloseBtn = document.createElement("button")
			newCloseBtn.classList.add("item-btn")
			newCloseBtn.insertAdjacentText("afterBegin", "×")
			newCloseBtn.onclick = this.delEvent.bind(this)
			this.itemsContainer.appendChild(newLi)
			newLi.appendChild(newSpan)
			newLi.appendChild(newCloseBtn)
			
			this.addTxt.value = ""	
		}	
	}
	
	markEvent(event){
		event.preventDefault()
		let currentItem = event.currentTarget
		currentItem.classList.toggle("item-done")
		let currentTxt = currentItem.querySelector(".item-text")
		currentItem.classList.toggle("item-mark")
	}
	
	delEvent(event){
		event.preventDefault()
		let currentBtn = event.currentTarget
		console.log(currentBtn)
		currentBtn.parentNode.parentNode.removeChild(currentBtn.parentNode)
	}
		
	createEvents(){
		this.addBtn.onclick = this.addNewItem.bind(this)
		for(let i = 0; i < this.itemsList.length; i++){
			this.itemsList[i].onclick = this.markEvent.bind(this)
		}
		for(let i = 0; i < this.delBtn.length; i++){
			this.delBtn[i].onclick = this.delEvent.bind(this)
		}
	}
	
}
