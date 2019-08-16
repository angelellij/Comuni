export class EspacioUsuariomodel {

  private id:number;
  private permiso_id:number;
  private usuario_id:number;
  private espacio_id:number;
  private creado:string;
  private editado:string;
  private eliminado:string;

  public setId(valor:number){ this.id = valor; }
  public setPermiso_id(valor:number){ this.permiso_id = valor; }
  public setUsuario_id(valor:number){ this.usuario_id = valor; }
  public setEspacio_id(valor:number){ this.espacio_id = valor; }
  public setCreado(valor:string){ this.creado = valor; }
  public setEditado(valor:string){ this.editado = valor; }
  public setEliminado(valor:string){ this.eliminado = valor; }

  public getId(){ return this.id; }
  public getPermiso_id(valor:number){ return this.permiso_id; }
  public getUsuario_id(){ return this.usuario_id; }
  public getEspacio_id(){ return this.espacio_id; }
  public getCreado(){ return this.creado; }
  public getEditado(){ return this.editado; }
  public getEliminado(){ return this.eliminado; }

  constructor (){  }
}
