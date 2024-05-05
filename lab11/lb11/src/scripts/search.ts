import ItemClass from "./ItemClass";

function check(substring: string, targetString: string): boolean {
    const regex:RegExp = new RegExp(substring, 'i');
    return regex.test(targetString);
}

function search(list:ItemClass[], str:string):ItemClass[]{
    const newList:ItemClass[] = [];
    list.forEach((item)=>{
        if (check(str, item.name))
            newList.push(item);
    })
    return newList;
}

export default search;