export class Usuario {
    private id:number;
    private nombre:string;
    private apellido:string;
    private foto:string;
    private descripcion:string;
    private fnac:string;
    private creado:string;
    private editado:string;
    private eliminado:string;
    
    public setId (x:number){this.id = x;}
    public setNombre (x:string){this.nombre = x;}
    public setApellido (x:string){this.apellido = x;}
    public setFoto (x:string){this.foto = x;}
    public setDescripcion (x:string){this.descripcion = x;}
    public setFnac (x:string){this.fnac = x;}
    public setCreado(valor:string){ this.creado = valor; }
    public setEditado(valor:string){ this.editado = valor; }
    public setEliminado(valor:string){ this.eliminado = valor; }

    public getId(){ return this.id; }
    public getNombre(){ return this.nombre; }
    public getApellido(){ return this.apellido; }
    public getFoto(){ return this.foto; }
    public getDescripcion(){ return this.descripcion; }
    public getFnac(){ return this.fnac; }
    
    public getCreado(){ return this.creado; }
    public getEditado(){ return this.editado; }
    public getEliminado(){ return this.eliminado; }

    constructor(){}

}
