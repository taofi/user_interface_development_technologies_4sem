function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {//проверка на соответсвие определенному классу или наследование от него
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

type AlertType = 'success' | 'danger' | 'warning' //может хранить только эти строки

function setAlertType(type: AlertType) {
    // ..
}

setAlertType('success')
setAlertType('warning')
//ошибка
// setAlertType('default')


class MyErrorShow extends MyError {
    show(): void {
        console.log(this.header + this.message);
    }
}

let error: MyErrorShow = new MyErrorShow();
console.log(error instanceof MyError);
