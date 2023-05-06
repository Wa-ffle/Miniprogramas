//lo mismo que antes pero con herencia

class Celular {
    constructor(color,peso,resp,resc,ram){
        this.Color=color;
        this.Peso=peso;
        this.Resp=resp;
        this.Resc=resc;
        this.Ram=ram;
        this.encendido=false;
    }
    BotonON(){
        if (this.encendido == false){
            alert("celular ecendido");
            this.encendido = true;
        }else {
            alert("celular apagado");
        }
    }
    Restart(){
        if (this.encendido == true){
            alert("reiniciando");
        }else{
            alert("celular apagado");
        }
    }
    Foto(){
        alert(`foto guardada con una resolucion ${this.resc}`);
    }
    Video(){
        alert(`video guardado con una resolucion ${this.resc}`);
    }
    InfoCelu(){
        return`
         Color: <b> ${this.Color} </b> <br>
         Peso: <b> ${this.Peso} </b> <br>
         Resolucion de la pantalla: <b> ${this.Resp} </b> <br>
         Resolucion de la camara: <b> ${this.Resc} </b> <br>
         RAM: <b> ${this.Ram} </b> <br>
         `;
    }
}

class CelularAltaG extends Celular{
    constructor(color,peso,resp,resc,ram,resce){
        super(color,peso,resp,resc,ram); 
        this.ResCamaraE = resce;
    }
    CamaraSL(){
        alert("estas grabando en camara Super Lenta");
    }
    FaceId(){
        alert("vamos a inciar un reconocimiento facial");
    }
    InfoAltaG(){
        return this.InfoCelu() + `Resolucion de la camara extra: ${this.ResCamaraE}`;
    }
}


celular1 = new CelularAltaG("Azul", "150g", "6", "4k", "12Gb", "full hd");
celular2 = new CelularAltaG("Negro", "200g", "6.5", "8k", "18Gb", "full hd");

document.write(`${celular1.InfoAltaG()}<br><br>${celular2.InfoAltaG()}<br>`);

celular1.BotonON();
celular1.Foto();
celular1.Video();   
celular1.Restart();
celular1.BotonON();
celular1.CamaraSL();
celular1.FaceId();