const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfStrings: Array<string> = ['Hello', 'world'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);

type NullType<type = string> = type | null;

let test: NullType<number> = 2;
test = null;
let test2: NullType = "asd";


interface Lengthwise {
    length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
    return arg.length;
}

getLength(['Я', 'js'])
getLength('Я js')
//getLength(1027739642281) // Ошибка, у number нет свойства length
