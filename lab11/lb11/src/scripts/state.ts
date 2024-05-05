import ItemClass from "./ItemClass";
import itemClass from "./ItemClass";
import item from "../components/Item";

class ItemListClass{
    public list:ItemClass[] = [];
    add(name:string, description:string):void{
        this.list.push(new ItemClass(this.list.length + 1, name, description));
    }
    sort():void{
        this.list = this.list.sort((a:itemClass, b:itemClass) => a.name.localeCompare(b.name));
    }
}


let ItemList:ItemListClass = new ItemListClass();
ItemList.add("Student", "Good worker!!");
ItemList.add("worker", "asda");
ItemList.add("Student Ksenia", "s da ");
ItemList.add("teacher Ksenia", "asfg ssas");
ItemList.add("Student gleb", "123");
ItemList.add("car", "231");
ItemList.add("Apple", "Fresh, juicy.");
ItemList.add("Chair ", "Comfortable");
ItemList.add("Car", "Sleek, fast.");
ItemList.add("Bread ", "Soft, warm.");
ItemList.add("Desk ", "Spacious");
ItemList.add("Bicycle ", "Eco-friendly.");
ItemList.add("Tomato ", "Ripe, red.");
ItemList.add("Lamp ", "Bright light.");
ItemList.add("Laptop ", "Portable");
ItemList.add("Cheese ", "Creamy");
ItemList.add("Bookshelf ", "Holds books.");
ItemList.add("Sneakers ", "Sporty, cool.");
ItemList.add("Coffee ", "Energizing");
ItemList.add("Sofa ", "Plush, cozy.");
ItemList.add("Watch ", "Timeless");
ItemList.add("Orange ", "Vitamin C.");
ItemList.add("Table ", "Durable");
ItemList.add("Motorcycle ", "Fast, loud.");
ItemList.add("Pizza ", "Cheesy, hot");
ItemList.add("Bed ", " Soft, big.");
ItemList.add("Volkswagen Car ", " Sleek design");
ItemList.add("Ford Car ", "Fast ride")
ItemList.add("Nissan  Car ", "Fast ride")
ItemList.add("Tesla Car ", "Electric")
ItemList.add("Honda Car ", "Reliable ")
ItemList.sort();

export default ItemList;