//Toggle Themes
let toggleButton = document.querySelector(".toggle__button");

toggleButton.onclick = () => {
    let switchTheme = document.querySelector(".body");
    let toggleIcon = document.querySelector(".toggle__icon");
    if (switchTheme.classList.contains("theme1")){
        switchTheme.classList.toggle("theme1");
        switchTheme.classList.toggle("theme2");
        toggleIcon.classList.toggle("theme1");
        toggleIcon.classList.toggle("theme2");

    }else if(switchTheme.classList.contains("theme2")){
        switchTheme.classList.toggle("theme2");
        switchTheme.classList.toggle("theme3");
        toggleIcon.classList.toggle("theme2");
        toggleIcon.classList.toggle("theme3");
    }else {
        switchTheme.classList.toggle("theme1");
        switchTheme.classList.toggle("theme3");
        toggleIcon.classList.toggle("theme1");
        toggleIcon.classList.toggle("theme3");
    }
        
}


//Calculator Functions

let numButtons = (num) => {
    let button = document.querySelector(".screen__text");
    if(button.innerHTML.length < 20){
        button.innerHTML += num;
    }
        
}

let numPointer = () => {
    let button = document.querySelector(".screen__text");
    if (button.innerHTML.length !== 0 && !button.innerHTML.includes('.')){
        button.innerHTML += '.';
    }
}

let delButton = () => {
    let button = document.querySelector(".screen__text");
    button.innerHTML = button.innerHTML.slice(0, -1);
}

let operationButton = (operation) => {
    let button = document.querySelector(".screen__text");
    let button2 = document.querySelector(".screen__text2");
    if(button.innerHTML.length !== 0 && button2.innerHTML.length == 0 ){
        button2.innerHTML = `${button.innerHTML} ${operation}`;
        button.innerHTML = "" ;
    }else if (button2.innerHTML.length !== 0){
        button2.innerHTML = `${button2.innerHTML.slice(0, -2)} ${operation}`;
    }
}

let resetButton = () => {
    document.querySelector(".screen__text").innerHTML = "";
    document.querySelector(".screen__text2").innerHTML= "";
}

let equalsButton = (number1, number2) => {
  if(number1.length != 0 && number2.length != 0){
    let concat = `${number1}${number2}`
    document.querySelector(".screen__text").innerHTML = eval(concat);
    document.querySelector(".screen__text2").innerHTML= "";
  }
}
