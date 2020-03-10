import { Column, Model, Table, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Sucursal } from "./Sucursal";
import { Producto } from "./Producto";

@Table
export class Stock extends Model<Stock> {

    @Column
    @PrimaryKey
    @AutoIncrement
    id_stock: number;

    @Column
    cantidad: number;

    @ForeignKey(() => Sucursal)
    @Column
    SUCURSAL_id_sucursal!: number;

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