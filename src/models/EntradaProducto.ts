import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo, Default } from 'sequelize-typescript';
import { Proveedor } from "./Proveedor";
import { Producto } from "./Producto";

@Table({ modelName: 'entrada_producto' })
export class EntradaProducto extends Model<EntradaProducto> {

    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_entrada' })
    idEntrada: number;

    @Column
    fecha: Date;

    @Column
    cantidad: number;

    @Default(1)
    @Column
    precio_unitario: number;

    @ForeignKey(() => Proveedor)
    @Column({ field: 'id_proveedor' })
    idProveedor!: number;

    @BelongsTo(() => Proveedor)
    proveedor: Proveedor;

    @ForeignKey(() => Producto)
    @Column({ field: 'id_producto' })
    idProducto: number;

    @BelongsTo(() => Producto)
    producto: Producto;
}