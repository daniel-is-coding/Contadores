//Setting initial value to start counting

let count = 0

//Selecting values

const value = document.querySelector('#value');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn){

    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
    });

});