
//console.log(product);
function filter(products, minPrice:number, maxPrice:number, size:number, color:string) {
        let filteredIds = [];
    
        for (const category in products.Shoes) {
          const shoes = products.Shoes[category];
    
          shoes.forEach(shoe => {
            if (shoe.price >= minPrice && shoe.price <= maxPrice && shoe.size === size && shoe.color === color) {
              filteredIds.push(shoe.id);
            }
          });
        }
    
    return filteredIds;
}
//console.log(filter(product, 50, 300, 35, "red"));
class shoesCase{
    shoesCase(id:number, size:number, color:string, discount:number, cost:number){
        size = size;
        color = color;
        discount = discount;
        cost = cost;
    }  
    Object.defineProperty(this, 'id', {
        value: id,
        writable: false, // нельзя изменять
        enumerable: true, // можно перечислять
        configurable: false // нельзя удалять
    });
    Object.defineProperty(this, 'price', {
        
        enumerable: true, // можно перечислять
        configurable: false // нельзя удалять
    }); 
    get (){
        return this.cost*(1 - this.discount/100)
    }
    set (newPrice){
        this.cost = newPrice
    }     
}


let allProduct ={
    Shoes:{
        Boots:[
            shoesCase(1, 22, "green", 10, 42),
            new shoesCase(2, 34, "red", 1, 80),
            new shoesCase(3, 34, "blue", 20, 100),
        ],
        Sneakers:[
            new shoesCase(4, 45, "green", 10, 42),
            new shoesCase(5, 30, "black", 50, 1000),
        ],
        Sandals:[
            new shoesCase(6, 20, "red", 10, 62),
            new shoesCase(7, 32, "green", 20, 82),
            new shoesCase(8, 42, "white", 10, 42),
        ],
    }, 
}
console.log(allProduct);
allProduct.Shoes.Boots[0].id = 2;
console.log(allProduct.Shoes.Boots[0].id);
