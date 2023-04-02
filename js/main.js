let inp1 = document.getElementById('in1')
let inp2 = document.getElementById('in2')
let butok = document.getElementById('butok')
let res = document.getElementById('result')

function fr(){


    if ((Number.isNaN(Number(inp1.value))) || !(Number.isInteger(Number(inp1.value)))) {
        res.innerHTML = 'Первое число должно быть ЦЕЛЫМ ЧИСЛОМ';
    }   else {
        var min = Math.ceil(Number(inp1.value));
        if ((Number.isNaN(Number(inp2.value))) || !(Number.isInteger(Number(inp2.value)))) {
            res.innerHTML = 'Второе число должно быть ЦЕЛЫМ ЧИСЛОМ';
        }   else {
            var max = Math.floor(Number(inp2.value));
            if (max < min) {
                var x = max;
                max = min;
                min = x;
            }
            let r = Math.floor(Math.random() * (max - min + 1)) + min;
            res.innerHTML = 'Случайное число от ' + inp1.value + ' до ' + inp2.value + ': ' + r
        }
    }
}
butok.onclick = fr