

    function imt() {
 
        let height = +heightInput.value;
       
        let weight = +weightInput.value;

        if (height > 3) {
            height = height / 100;
        }
      
        let index = weight / (height ** 2);
    
        index = Math.floor(index * 10) / 10;

        if(index < 18.5 ) {
            indexPlace.innerHTML = index;
            valuePlace.innerHTML ='недостатня маса тіла';
        } else if(index >= 18.5 && index <= 24.9) {
            indexPlace.innerHTML = index;
            valuePlace.innerHTML = 'норма';
        } else if(index >= 25 && index <= 29.9) {
            indexPlace.innerHTML = index;
            valuePlace.innerHTML = 'передожиріння';
        } else if(index >= 30 && index <= 34.9) {
            indexPlace.innerHTML = index;
            valuePlace.innerHTML = 'ожиріння І ступеня';
        } else if(index >= 35 && index <= 39.9) {
            indexPlace.innerHTML = index;
            valuePlace.innerHTML = 'ожиріння ІІ ступеня';
        } else if(index >= 40) {
            indexPlace.innerHTML = index;
            valuePlace.innerHTML = 'ожиріння ІІІ ступеня';
        }
    }