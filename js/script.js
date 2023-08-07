window.addEventListener('load', ()=> { 

    /*crear lisenin carga completa html */
    /*constante para display y constante para botones*/
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');
    /*constante para converit a Array el HTMLCollection */
    const keypadButtonsArray = Array.from(keypadButtons);
 
    /*iteramos por nuestro array de botones*/
   keypadButtonsArray.forEach( (button) => {
    /*a cada boton un lisener */

    button.addEventListener('click', ()=>{
        calculadora(button,display);
    });

   }) 



});

function calculadora(button,display){
switch(button.innerHTML){

case 'C': borrar(display);break;
case'=': calcular(display); break;
default: actualizar(display, button); break;

}
}

function calcular(display){
display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button){
if(display.innerHTML == 0){
display.innerHTML= ' ';
} 
display.innerHTML += button.innerHTML;


}

function borrar(display){
display.innerHTML = 0;

}