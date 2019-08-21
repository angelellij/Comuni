export class UsuarioDatos {
    private uid:string;
    private descripcion:string;
    private fnac:string;
    private creado:number;
    private editado:number;
    private eliminado:number;

    public setId (x:string){this.uid = x;}
    public setDescripcion (x:string){this.descripcion = x;}
    public setFnac (x:string){this.fnac = x;}
    public setCreado(valor:number){ this.creado = valor; }
    public setEditado(valor:number){ this.editado = valor; }
    public setEliminado(valor:number){ this.eliminado = valor; }

    public getId(){ return this.uid; }
    public getDescripcion(){ return this.descripcion; }
    public getFnac(){ return this.fnac; }
    public getCreado(){ return this.creado; }
    public getEditado(){ return this.editado; }
    public getEliminado(){ return this.eliminado; }

    constructor(
        uidx:string,
        descripcionx:string = null,
        fnacx:string = null,
        creadox:number = null,
        editadox:number = null,
        eliminadox:number = null,
    ){
      this.uid = uidx;
      this.descripcion = descripcionx;
      this.fnac = fnacx;  
      this.creado = creadox;
      this.editado = editadox;
      this.eliminado = eliminadox;
    }
}

