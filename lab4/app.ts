class shoesCase {
    readonly id: number;
    public size: number;
    public color: string;
    public discount: number;
    private _cost: number;

    constructor(id: number, size: number, color: string, discount: number, cost: number) {
        this.id = id;
        this.size = size;
        this.color = color;
        this.discount = discount;
        this.cost = cost;
    }

    public get cost(): number {
        return parseFloat((this._cost * (1 - this.discount / 100)).toFixed(2));
    }

    public set cost(newPrice: number) {
        this._cost = newPrice
    }
}

let allProduct: {
    Shoes: {
        Boots: shoesCase[],
        Sneakers: shoesCase[],
        Sandals: shoesCase[]
    },
    [Symbol.iterator](): { next(): IteratorResult<shoesCase> }
} = {
    Shoes: {
        Boots: [
            new shoesCase(1, 22, "green", 10, 42),
            new shoesCase(2, 34, "red", 1, 80),
            new shoesCase(3, 34, "blue", 20, 100),
        ],
        Sneakers: [
            new shoesCase(4, 45, "green", 10, 42),
            new shoesCase(5, 30, "black", 50, 1000),
        ],
        Sandals: [
            new shoesCase(6, 20, "red", 10, 62),
            new shoesCase(7, 32, "green", 20, 82),
            new shoesCase(8, 42, "white", 10, 42),
        ],
    },
    [Symbol.iterator](): { next(): IteratorResult<shoesCase> } {
        let categories: shoesCase[] = Object.values(this.Shoes).flat() as shoesCase[];
        let current: number = 0;
        return {
            next(): IteratorResult<shoesCase> {
                if (current < categories.length) {
                    return {done: false, value: categories[current++]};
                } else {
                    return {done: true, value: null};
                }
            }
        };
    }
}
for (let product of allProduct) {
    console.log(`id ${product.id}, size ${product.size}, color ${product.color}, discount ${product.discount}, cost ${product.cost}`);
}

function filter(minPrice: number, maxPrice: number, size: number, color: string): number[] {
    let filteredIds: number[] = [];
    for (let product of allProduct) {
        if (product.cost >= minPrice && product.cost <= maxPrice && product.size === size && product.color === color)
            filteredIds.push(product.id);
    }
    return filteredIds;
}


console.log(filter(10, 40, 22, 'green'));
