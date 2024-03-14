interface Student {
    id: number,
    name: string,
    group: number
}

const array: Student[] = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

interface CarsType {
    manufacturer?: string,
    model?: string
}

let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';

const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

interface ArrayCarsType {
    cars: CarsType[]
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GroupFilterType = MarkFilterType | 11 | 12;
type DoneType = boolean;

let a: GroupFilterType = 1;
a = 12;
a = 4;

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students: StudentType[] // массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

class Group implements GroupType {
    students: Array<StudentType> = [];

    constructor(public mark: MarkFilterType, public group: GroupFilterType) {
    }

    studentsFilter(group: GroupFilterType): Array<StudentType> {
        return this.students.filter(student => student.group == group);
    }

    marksFilter(mark: MarkFilterType): Array<StudentType> {
        return this.students.filter(student => student.marks.some(m => m.mark == mark));
    }

    deleteStudent(id: number): void {
        this.students = this.students.filter(student => student.id != id);
    }
}

let group: Group = new Group(5, 3);
group.students.push({
    id: 1,
    name: "Иван Иванов",
    group: 3,
    marks: [
        {
            subject: "Математика",
            mark: 5,
            done: true,
        },
    ],
});
group.students.push({
    id: 2,
    name: "Олег Иванов",
    group: 3,
    marks: [
        {
            subject: "Математика",
            mark: 2,
            done: true,
        },
        {
            subject: "Русский яз.",
            mark: 6,
            done: true,
        },
    ],
});

group.students.push({
    id: 3,
    name: "Иван Олегоыич",
    group: 2,
    marks: [
        {
            subject: "Математика",
            mark: 10,
            done: true,
        },
        {
            subject: "Физика",
            mark: 6,
            done: true,
        },
    ],
});

console.log('mark filter:')
console.log(group.marksFilter(6));
console.log('Student filter:')
console.log(group.studentsFilter(3));
console.log('Delete:')
group.deleteStudent(3);
console.log(group.students);
