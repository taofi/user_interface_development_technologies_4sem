let isValid;
const zeroSize = 'Поле не должно быть пустым!';
const wrongFormat = 'Недопустимый формат!';
const wrongSize = 'Поле не должно содержать более ';

function ValidForm()
{
    let l_name = document.getElementById('l_name').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let select = document.getElementById('select').value;
    let number = document.getElementById('number').value;
    let com = document.getElementById('com').value;
    isValid = true
    
    let errorlastNameError = document.getElementById('lastNameError');
    errorlastNameError.innerHTML = '';
    let errorName = document.getElementById('NameError');
    errorName.innerHTML = '';
    let  errorEmail = document.getElementById('emailError');
    errorEmail.innerHTML = '';
    let  errorNumber = document.getElementById('telError');
    errorNumber.innerHTML = '';
    let errorSelect = document.getElementById('selectError');
    errorSelect.innerHTML = '';
    let errorCom = document.getElementById('comError');
    errorCom.innerHTML = '';
    let courseError = document.getElementById('cursError');
    courseError.innerHTML = '';

    if(!checkName(l_name, errorlastNameError))
        isValid = false;

    if(!checkName(name, errorName))
        isValid = false;

   
    if(email.length == 0 || !isValidEmail(email))
    {
        if(email.length == 0)
            errorEmail.innerHTML = zeroSize;
        else
            errorEmail.innerHTML = wrongFormat;
        isValid = false;
    }


    if(number.length == 0 || !isValidNumber(number))
    {
        if(number.length == 0)
            errorNumber.innerHTML = zeroSize;
        else
            errorNumber.innerHTML = wrongFormat;
        isValid = false;
    }

    
    if(select == 'null')
    {
        errorSelect.innerHTML = 'Необходимо выбрать вариант!';
        isValid = false;
    }
    
    if(com.length == 0)
    {
        errorCom.innerHTML = zeroSize;
        isValid = false;
    }
    if(com.length > 250)
    {
        errorCom.innerHTML = wrongSize + '250 символов'
        isValid = false;
    }
    
    if(document.getElementById('bstu').checked)
    {
        const selectedRadio = document.querySelector('input[name="course"]:checked');
        if(selectedRadio == null)
        {
            courseError.innerHTML = 'Необходимо выбрать вариант!';
            isValid = false;
        }
    }

    if(!isValid)
        return false;

    if(select != 'Минск' || !document.getElementById('bstu').checked || !document.querySelector('input[name="course"][value= "3"]').checked)
       return confirm('Вы уверены в своих ответах?');

    return isValid;
}

function checkName(name, error){
    if(name.length > 20){
        error.innerHTML = wrongSize + '20 символов';
        return false;
    }
    if(name.length == 0){
        error.innerHTML = zeroSize;
        return false;
    }
    if(!isOnlyLetters(name)){
        error.innerHTML = wrongFormat;
        return false; 
    }
    return true;
}

function isOnlyLetters(str) {
    return /^[a-zA-Zа-яА-ЯёЁ]+$/.test(str);
}

function isValidEmail(str) {
    const regex = /^[^\s@]+@[a-zA-Z]{2,5}\.[a-zA-Z]{2,3}$/;
    return regex.test(str);
}
function isValidNumber(str) {
    const regex = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;
    return regex.test(str);
  }