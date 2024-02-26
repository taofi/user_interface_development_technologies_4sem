class shoesCase{
    readonly id:number;
    public size:number;
    public color:string;
    public discount:number;
    private _cost:number;
    constructor(id:number, size:number, color:string, discount:number, cost:number){
        this.id = id;
        this.size = size;
        this.color = color;
        this.discount = discount;
        this.cost = cost;
    }  
    public get cost(): number {
        return this._cost*(1 - this.discount/100)
    }
  
    public set cost(newPrice: number) {
        this._cost = newPrice
    }
}


let allProduct ={
    Shoes:{
        Boots:[
            new shoesCase(1, 22, "green", 10, 42),
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

class ShoesCollection {
    private allProduct: {
        Shoes: {
            Boots: shoesCase[];
            Sneakers: shoesCase[];
            Sandals: shoesCase[];
        };
    };

    constructor(allProduct: {
        Shoes: {
            Boots: shoesCase[];
            Sneakers: shoesCase[];
            Sandals: shoesCase[];
        };
    }) {
        this.allProduct = allProduct;
    }

    *[Symbol.iterator](): Generator<shoesCase, void, undefined> {
        let categories = Object.keys(this.allProduct.Shoes);
        for (let category of categories) {
            let items:shoesCase[] = this.allProduct.Shoes[category];
            for (let item of items) {
                yield item;
            }
        }
    }
}

const shoesCollection = new ShoesCollection(allProduct);


for (let product of shoesCollection) {
    console.log(product);
}
function filter(shoes:ShoesCollection, minPrice:number, maxPrice:number, size:number, color:string) {
    let filteredIds = [];
    for (let product of shoes) {
        if(product.cost >= minPrice && product.cost <= maxPrice && product.size === size && product.color === color)
        filteredIds.push(product.id);
    }
return filteredIds;
}


console.log(filter(shoesCollection, 10, 80, 20, 'red'));
