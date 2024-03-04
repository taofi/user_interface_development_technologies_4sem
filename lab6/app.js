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
class Group {
    constructor() {
        this.students = [];
    }
    studentsFilter(group) {
        return this.students.filter(student => student.group === group);
    }
    marksFilter(mark) {
        return this.students.filter(student => student.marks.some(m => m.mark === mark));
    }
    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    }
}
