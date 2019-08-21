export class Usuario {
    private uid:string;
    private nombre:string;
    private apellido:string;
    private foto:string;

    public setId (x:string){this.uid = x;}
    public setNombre (x:string){this.nombre = x;}
    public setApellido (x:string){this.apellido = x;}
    public setFoto (x:string){this.foto = x;}

    public getId(){ return this.uid; }
    public getNombre(){ return this.nombre; }
    public getApellido(){ return this.apellido; }
    public getFoto(){ return this.foto; }
  
    constructor(
        uidx:string,
        nombrex:string,
        apellidox:string,
        fotox:string = null,
    ){
      this.uid = uidx;
      this.nombre = nombrex;
      this.apellido = apellidox;
      this.foto = fotox;
    }

}
