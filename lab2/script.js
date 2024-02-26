const caps = document.querySelectorAll('.cap');
const ball = document.getElementById('ball');
const correct = document.getElementById('correct');
const incorrect = document.getElementById('incorrect');
const resultField = document.getElementById('result');
let positionBall;
let score = 0;

resultField.value = 0;

function changeBall() {
    let diameter = document.getElementById('diameter').value;
    ball.style.width = diameter + 'px';
    ball.style.height = diameter + 'px';
}

function changeCap() {
    let heightCap = document.getElementById('heightN').value;
    let widthCap = document.getElementById('widthN').value;
    for (i = 0; i < 3; i++) {
        caps[i].style.width = widthCap + 'px';
        caps[i].style.height = heightCap + 'px';
    }

}

caps.forEach(cap => {
    cap.addEventListener('click', function (event) {
        caps[positionBall].appendChild(ball);
        this.querySelector('img').style.transform = `translatey(${parseInt(ball.offsetWidth) * (-1) - 10 + 'px'})`;
        if (this == caps[positionBall]) {
            correct.style.opacity = 1;
            score++;
        } else {
            score--;
            incorrect.style.opacity = 1;
        }
        resultField.value = score;
        setTimeout(reset, 1200);
    });
});

function save() {
    changeBall();
    changeCap();
    changePos();
    return false;
}

function reset() {
    correct.style.opacity = 0;
    incorrect.style.opacity = 0;
    document.getElementById('heightN').value = 100;
    document.getElementById('widthN').value = 90;
    document.getElementById('diameter').value = 50
    changeCap();
    changeBall();
    changePos();
}

function changePos() {
    for (i = 0; i < 3; i++)
        caps[i].querySelector('img').style.transform = '';
    positionBall = Math.floor(Math.random() * 3);
}

document.getElementById('reload').addEventListener("click", () => {
    score = 0;
    resultField.value = score;
    reset();
})

changePos();