// Un sistema el cual permite hacer que un celular "saque fotos, se reinicie, se prenda, saque videos" y nos da la informacion del celular


class Celular {
    constructor(color,peso,resp,resc,ram){
        this.Color = color;
        this.Peso = peso;
        this.Resp = resp;
        this.Resc = resc;
        this.Ram = ram;
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
         Color: <b>${this.Color}</b> <br>
         Peso: <b>${this.Peso}</b> <br>
         Resolucion de la pantalla: <b>${this.Resp}</b> <br>
         Resolucion de la camara: <b>${this.Resc}</b> <br>
         RAM: <b>${this.Ram}</b> <br>
         `;
    }
}

celular1 = new Celular("negro","200g","4.5","hd","8Gb");
celular2 = new Celular("azul","150g","4","fullhd","4Gb");
celular3 = new Celular("rojo","300g","5.5","4k","16Gb");

document.write(`
    ${celular1.InfoCelu()} <br>
    ${celular2.InfoCelu()} <br>
    ${celular3.InfoCelu()} <br>
`)

celular1.BotonON();
celular1.Foto();
celular1.Video();   
celular1.Restart();
celular1.BotonON;
