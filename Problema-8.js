// Algo pa una universidad toda rota

const obtenerInfo = (materia)=>{
    const materias = {
        Fisica : ["Vachetta"," Pedro"," Max"],
        Programacion : ["Dalto", " Pedro"," Juan"," Fernando"," Max"],
        Logica : ["Mario"," Pedro"," Juan"," Fernando"," Max"],
        Quimica : ["Lili", " Pedro"," Juan"," Max"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    }else {
        return materias;
    }
}

const mostrarInfo = (materia)=>{
    let informacion = obtenerInfo(materia);

if (informacion !== false) {
    let profesor = obtenerInfo(materia)[0][0];
    let Alumnos = obtenerInfo(materia)[0];
    Alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style='color:green'>${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${Alumnos}</b><br><br>
    `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInfo();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for(Info in informacion) {
        if (informacion[Info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + Info)
        }
    }
    return `<b style="color:blue"> ${alumno} </b> esta en <b style="color:Red">${cantidadTotal}</b> Clases <br>
    Esta cursando las clases: <b>${clasesPresentes}</b><br>`;
}

mostrarInfo("Fisica");
mostrarInfo("Programacion");
mostrarInfo("Logica");
mostrarInfo("Quimica");

document.write(cantidadDeClases(" Fernando"));
document.write(cantidadDeClases(" Juan"));
document.write(cantidadDeClases(" Max"));
document.write(cantidadDeClases(" Pedro"));