class shoesCase {
    constructor(id, size, color, discount, cost) {
        this.id = id;
        this.size = size;
        this.color = color;
        this.discount = discount;
        this.cost = cost;
    }
    get cost() {
        return parseFloat((this._cost * (1 - this.discount / 100)).toFixed(2));
    }
    set cost(newPrice) {
        this._cost = newPrice;
    }
}
let allProduct = {
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
    [Symbol.iterator]() {
        let categories = Object.values(this.Shoes).flat();
        let current = 0;
        return {
            next() {
                if (current < categories.length) {
                    return { done: false, value: categories[current++] };
                }
                else {
                    return { done: true, value: null };
                }
            }
        };
    }
};
for (let product of allProduct) {
    console.log(`id ${product.id}, size ${product.size}, color ${product.color}, discount ${product.discount}, cost ${product.cost}`);
}
function filter(minPrice, maxPrice, size, color) {
    let filteredIds = [];
    for (let product of allProduct) {
        if (product.cost >= minPrice && product.cost <= maxPrice && product.size === size && product.color === color)
            filteredIds.push(product.id);
    }
    return filteredIds;
}
console.log(filter(10, 40, 22, 'green'));
