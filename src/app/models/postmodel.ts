export class Postmodel {

  private id:number;
  private titulo:string;
  private texto:string;
  private usuario_id:number;
  private espacio_id:number;
  private likes:number;
  private importante:string;
  private creado:string;
  private editado:string;
  private eliminado:string;

  public setId(valor:number){ this.id = valor; }
  public setTitulo(valor:string){ this.titulo = valor; }
  public setTexto(valor:string){ this.texto = valor; }
  public setUsuario_id(valor:number){ this.usuario_id = valor; }
  public setEspacio_id(valor:number){ this.espacio_id = valor; }
  public setLikes(valor:number){ this.likes = valor; }
  public setImportante(valor:string){ this.importante = valor; }
  public setCreado(valor:string){ this.creado = valor; }
  public setEditado(valor:string){ this.editado = valor; }
  public setEliminado(valor:string){ this.eliminado = valor; }

  public getId(){ return this.id; }
  public getTitulo(){ return this.titulo; }
  public getTexto(){ return this.texto; }
  public getUsuario_id(){ return this.usuario_id; }
  public getEspacio_id(){ return this.espacio_id; }
  public getLikes(){ return this.likes; }
  public getImportante(){ return this.importante; }
  public getCreado(){ return this.creado; }
  public getEditado(){ return this.editado; }
  public getEliminado(){ return this.eliminado; }

  constructor () {}
}
