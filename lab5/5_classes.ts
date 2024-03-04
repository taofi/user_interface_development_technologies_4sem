class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

class Car2 {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) {
    }
}


class Animal {
    protected voice: string = ''   //наследуется
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {//не наследуется
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
//ошибка
// cat.voice


abstract class Component {
    abstract render(): void

    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info';
    }
}

