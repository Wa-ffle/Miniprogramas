//crear "aplicaciones" y "ejecutarlas, cerrarlas, instalarlas y desinstalarlas" ademas de mostrar su informacion

class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.status = false;
        this.instalada = false;
    }
    Install(){
        if(this.instalada == false){
            this.instalada = true;
            alert("aplicacion instalada con exito");
        }
    }else(){
        alert("esta aplicacion ya esta instalada");
    }
    
    Uninstall(){
        if(this.instalada == true){
            this.instalada = false;
            alert("aplicacion se desinstalo con exito");
        }
    }
    Open(){
        if(this.status == false && this.instalada == true){
            this.status = true;
            alert("aplicacion abierta con exito");
        }
    }
    Close(){
        if(this.status == true && this.instalada == true){
        this.status = false;
        alert("aplicacion cerrada con exito");
        }
    }
    AppInfo(){
        return `
        Descargas:<b>${this.descargas}</b><br>
        Puntuacion:<b>${this.puntuacion}</b><br>
        Peso:<b>${this.peso}</b><br>
        `
    }
}

app1 = new App("10,000","3 estrellas", "100Mb")
app2 = new App("100,000","3.5 estrellas", "250Mb")
app3 = new App("580,000","4 estrellas", "50Mb")
app4 = new App("4M","4.9 estrellas", "750Mb")

document.write(`${app1.AppInfo()} <br> ${app2.AppInfo()} <br> ${app3.AppInfo()} <br> ${app4.AppInfo()} <br>`)

app1.Install();
app1.Open();
app1.Close();
app1.Uninstall();
