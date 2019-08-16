export class Espaciomodel {

  private id:number;
  private nombre:string;
  private descripcion:string;
  private espacio_padre_id:number;
  private creado:string;
  private editado:string;
  private eliminado:string;

  public setId(valor:number){ this.id = valor; }
  public setNombre(valor:string){ this.nombre = valor; }
  public setDescripcion(valor:string){ this.descripcion = valor; }
  public setEspacio_padre_id(valor:number){ this.espacio_padre_id = valor; }
  public setCreado(valor:string){ this.creado = valor; }
  public setEditado(valor:string){ this.editado = valor; }
  public setEliminado(valor:string){ this.eliminado = valor; }

  public getId(){ return this.id; }
  public getNombre(){ return this.nombre; }
  public getDescripcion(){ return this.descripcion; }
  public getEspacio_padre_id(){ return this.espacio_padre_id; }
  public getCreado(){ return this.creado; }
  public getEditado(){ return this.editado; }
  public getEliminado(){ return this.eliminado; }

  constructor (){ }

}
