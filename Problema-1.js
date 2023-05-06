// habia que hacer un codigo que validara entrada a un bar 
// y el primero despues de las 2am ganaba entrada gratis





let free = false;

const validar = (time)=>{
    let edad = prompt('Cual es tu edad?');
    if (edad >= 18) {
        if (time >= 2 && time < 7 && !free) {
            alert('ligaste entrada gratis, tenes un ojete');
            free = true;
        }else {
            alert(`son las ${time}:00Hs podes pasar pero tenes que pagar entrada`);
        }
    }else{
        alert('sos menor pendejo, no podes pasar');
    }
}

validar(19);
validar(20);
validar(24);
validar(1);
validar(2);
validar(5);
validar(7);
