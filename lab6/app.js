const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
let car = {};
car.manufacturer = "manufacturer";
car.model = 'model';
const car1 = {};
car1.manufacturer = "manufacturer";
car1.model = 'model';
const car2 = {};
car2.manufacturer = "manufacturer";
car2.model = 'model';
const arrayCars = [{
        cars: [car1, car2]
    }];
let a = 1;
a = 12;
a = 4;
class Group {
    constructor(mark, group) {
        this.mark = mark;
        this.group = group;
        this.students = [];
    }
    studentsFilter(group) {
        return this.students.filter(student => student.group == group);
    }
    marksFilter(mark) {
        return this.students.filter(student => student.marks.some(m => m.mark == mark));
    }
    deleteStudent(id) {
        this.students = this.students.filter(student => student.id != id);
    }
}
let group = new Group(5, 3);
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
console.log('mark filter:');
console.log(group.marksFilter(6));
console.log('Student filter:');
console.log(group.studentsFilter(3));
console.log('Delete:');
group.deleteStudent(3);
console.log(group.students);
