import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { Usuario } from "./Usuario";
import { Producto } from "./Producto";

@Table({ modelName: 'reseña' })
export class Reseña extends Model<Reseña> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_reseña: number;

    @Column
    comentario: string;

    @Column
    valoracion: number;

    @ForeignKey(() => Usuario)
    @Column
    usuario_id_usuario: number;

    @ForeignKey(() => Producto)
    @Column
    producto_id_producto: number;

    @BelongsTo(() => Usuario)
    usuario: Usuario;

    @BelongsTo(() => Producto)
    producto: Producto;

}