import { Column, Model, Table, ForeignKey, PrimaryKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Sucursal } from "./Sucursal";
import { Producto } from "./Producto";
import { DetalleCompra } from "./DetalleCompra";

@Table({ modelName: 'stock' })
export class Stock extends Model<Stock> {

    // Columnas
    @Column
    cantidad: number;

    @PrimaryKey
    @ForeignKey(() => Sucursal)
    @Column({ field: 'id_sucursal' })
    idSucursal: number;

    @PrimaryKey
    @ForeignKey(() => Producto)
    @Column({ field: 'id_producto' })
    idProducto: number;

    // Relaciones
    @BelongsTo(() => Sucursal)
    sucursal: Sucursal;

    @BelongsTo(() => Producto)
    producto: Producto;

    @HasMany(() => DetalleCompra)
    detalleCompra: DetalleCompra[];
}