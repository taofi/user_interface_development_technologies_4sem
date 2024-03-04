interface Rect {
    readonly id: string //нельзя изменять
    color?: string //необязательное поле
    size: {
        width: number
        height: number
    }
}

const rect: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black'
//ошибка
// rect2.id = '3232'

const rect3 = {} as Rect;  //пустой объект считается типом rect
const rect4 = <Rect>{}; //старая версия

// наследование
interface RectWithArea extends Rect {
    getArea: () => number; //функция возврощает number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

interface IClock {
    time: Date

    setTime(date: Date): void
}

//класс наследуется от iclock
class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date;
    }
}

//создание интерфейса с динамическими ключами
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}


