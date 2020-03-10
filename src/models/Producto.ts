import { Column, Model, Table, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import {Categoria} from "./Categoria";

@Table
export class Producto extends Model<Producto> {

    @Column
    @PrimaryKey
    @AutoIncrement
    id_producto: number;

    @Column
    nombre: string;

    @Column
    descripcion: string;

    @Column
    precio: number;

    @ForeignKey(() => Categoria)
    @Column
    Categoria_id_categoria!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}