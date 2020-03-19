import { Column, Model, Table, ForeignKey, PrimaryKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Sucursal } from "./Sucursal";
import { Producto } from "./Producto";
import { DetalleCompra } from "./DetalleCompra";

@Table({ modelName: 'stock' })
export class Stock extends Model<Stock> {

    @Column
    cantidad: number;

    @PrimaryKey
    @ForeignKey(() => Sucursal)
    @Column
    sucursal_id_sucursal: number;

    @PrimaryKey
    @ForeignKey(() => Producto)
    @Column
    producto_id_producto: number;

    @BelongsTo(() => Sucursal)
    sucursal: Sucursal;

    @BelongsTo(() => Producto)
    producto: Producto;

    @HasMany(() => DetalleCompra)
    detalleCompra: DetalleCompra[];
}