var clothes = {
  '0001' : {
    'name' : 'jeans',
    'price' : 5.99,
    'color' : 'blue',
    'size' : ['M', 'L', 'XXL', 'XXXL']
  },
   '0002' : {
    'name' : 'dress',
    'price' : 3.5,
    'color' : 'green',
    'size' : ['S', 'M', 'L', 'XL']
  },
   '0003' : {
    'name' : 'jacket',
    'price' : 7,
    'color' : 'yellow',
    'size' : ['S', 'M', 'L', 'XL', 'XXL']
  },
   '0004' : {
    'name' : 'T-shirt',
    'price' : 4.20,
    'color' : 'blue',
    'size' : ['S', 'XL', 'XXL', 'XXXL']
  },
   '0005' : {
    'name' : 'pants',
    'price' : 1,
    'color' : 'multicolor',
    'size' : ['S', 'M', 'L', 'XL', 'XXL']
  },
   '0006' : {
    'name' : 'blouse',
    'price' : 4.5,
    'color' : 'white',
    'size' : ['S', 'M', 'L', 'XL']
  }  
};


  
// цикл выводит все доступные вещи конкретного размера 
for(var article in clothes){
    if(clothes[article]['size'].indexOf('M') != -1 )
      console.log('Article: ' + article, clothes[article]);
  }
// по артиклю выводит имеющийся товар
console.log(clothes[prompt('Enter article', '')]);

//или так:
var myArticle = prompt('Enter article', '');
for(var article in clothes){
  if(myArticle === article)
    console.log('Info about article #' + article + ':', clothes[article]);
}
