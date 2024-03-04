const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]; //класс Array

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['str', 1234567];


let variable: any = 42;
variable = 'New String'; //без any ошибка
variable = [];

function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Кирилл');

// Never
//используется когда ошибка или функция бесконечно выполняется
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {

    }
}

// Type
// создание именованных типов
type Login = string;

const login: Login = 'admin';
//ошибка
// const login2: Login = 2

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';
//ошибка
// const id3: ID = true

type SomeType = string | null | undefined;
