export class Comentariomodel {

    private id:number;
    private texto:string;
    private comentario_id:number;
    private post_id:number;
    private usuario_id:number;
    private espacio_id:number;
    private likes:number;
    private creado:string;
    private editado:string;
    private eliminado:string;

    public setId(valor:number){ this.id = valor; }
    public setTexto(valor:string){ this.texto = valor; }
    public setComentario_id(valor:number){ this.comentario_id = valor; }
    public setPost_id(valor:number){ this.post_id = valor; }
    public setUsuario_id(valor:number){ this.usuario_id = valor; }
    public setEspacio_id(valor:number){ this.espacio_id = valor; }
    public setLikes(valor:number){ this.likes = valor; }
    public setCreado(valor:string){ this.creado = valor; }
    public setEditado(valor:string){ this.editado = valor; }
    public setEliminado(valor:string){ this.eliminado = valor; }

    public getId(){ return this.id; }
    public getTexto(){ return this.texto; }
    public getComentario_id(){ return this.comentario_id; }
    public getPost_id(){ return this.post_id; }
    public getUsuario_id(){ return this.usuario_id; }
    public getEspacio_id(){ return this.espacio_id; }
    public getLikes(){ return this.likes; }
    public getCreado(){ return this.creado; }
    public getEditado(){ return this.editado; }
    public getEliminado(){ return this.eliminado; }

    constructor () {}
}
