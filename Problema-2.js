// un programa que gestiona asistencias e inasistencias de los alumnos por 30 dias
// si tienen mas de 18 faltas repiten curso

let cantidad = prompt('Cuantos alumnos son en clase?');
let total = [];

for (i = 0; i < cantidad; i ++) {
    total[i] = [prompt("nombre del alumno" + (i+1)), 0];
}

const Asistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        total[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in total) {
        Asistencia(total[alumno][0],alumno);
    }
}

for (alumno in total) {
    let resultado = `${total[alumno][0]}:<br>
    ____asistencias: <b>${total[alumno][1]}</b> <br>
    ____ausencias: <b>${30 - (total[alumno][1])}</b>`;
    if (30 - total[alumno][1] > 18) {
        resultado+= "<b style= 'color:red'> REPROBADO POR INASISTENCIAS</b><br><br>"
    }else {
        resultado+= "<br><br>"
    }
    document.write(resultado)
}