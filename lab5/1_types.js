var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello Typescript';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13]; //класс Array
var words = ['Hello', 'Typescript'];
// Tuple
var contact = ['str', 1234567];
var variable = 42;
variable = 'New String'; //без any ошибка
variable = [];
function sayMyName(name) {
    console.log(name);
}
sayMyName('Кирилл');
// Never
//используется когда ошибка или функция бесконечно выполняется
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
