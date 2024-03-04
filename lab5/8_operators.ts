interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person; //может хранить 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Pick<User, Exclude<keyof User, '_id' | 'createdAt'>> //хранит 'name' | 'email'. Exclude исключает '_id' | 'createdAt'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'. Pick берет только 'name' | 'email'


//let u1: UserKeysNoMeta1 = 'name'
//ошибка
// u1 = '_id'

let obj1: UserKeysNoMeta1 = {
    name: '12',
    email: '123'
};
let obj2: UserKeysNoMeta2 = {
    name: '12',
    email: '123'
};