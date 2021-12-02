var min = +prompt('Введите минимальное число');
var max = +prompt('Введите максимальное число');

function random(min, max){
    var rand = Math.floor(Math.random()*(max + 1 - min) + min );
    return rand;
}

for(var i = 0 ; i<=10 ; i++){
    var a = random(min,max)
    var b = random(min,max)
    var ans = prompt(a + "+" + b)
    alert('Правильный ответ ' + (a + b) +" Ваш ответ " + ans)
}
