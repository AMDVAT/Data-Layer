import { Column, Model, Table, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Usuario } from "./Usuario";
import { Producto } from "./Producto";

@Table
export class Reseña extends Model<Reseña> {

    @Column
    @PrimaryKey
    @AutoIncrement
    id_reseña: number;

    @Column
    comentario: string;

    @Column
    valoracion: number;

    @ForeignKey(() => Usuario)
    @Column
    USUARIO_id_usuario!: number;

    @ForeignKey(() => Producto)
    @Column
    PRODUCTO_id_producto!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}