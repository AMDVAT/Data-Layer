import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { Usuario } from "./Usuario";
import { Producto } from "./Producto";

@Table({ modelName: 'resena' })
export class Reseña extends Model<Reseña> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_resena: number;

    @Column
    comentario: string;

    @Column
    valoracion: number;

    @ForeignKey(() => Usuario)
    @Column
    id_usuario: number;

    @ForeignKey(() => Producto)
    @Column
    id_producto: number;

    @BelongsTo(() => Usuario)
    usuario: Usuario;

    @BelongsTo(() => Producto)
    producto: Producto;

}