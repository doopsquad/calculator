let text = document.getElementById('heading');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');

let equation = "";

function append(key) {
    equation += key;
    text.innerHTML = equation;
    switch (key) {
        case '+':
            text.innerHTML = "";
            break;
        case '-':
            text.innerHTML = "";
            break;
        case '/':
            text.innerHTML = "";
            break;
        case '*':
            text.innerHTML = "";
            break;
    }
    

}


function wipe() {
    equation = "";
    text.innerHTML = "";
}

function calculate() {
    try {
        text.innerHTML = eval(equation);
    }
    catch(error) {
        text.innerHTML = "Error";
    }
    
}

clear.addEventListener('click', wipe);

equal.addEventListener('click', calculate);

keys.addEventListener('click', append);

