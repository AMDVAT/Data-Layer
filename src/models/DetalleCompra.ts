import { Column, Model, Table, BelongsTo, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Compra } from "./Compra";
import { Stock } from "./Stock";

@Table({ modelName: 'detalle_compra'})
export class DetalleCompra extends Model<DetalleCompra> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_detalle_compra: number;

    @ForeignKey(() => Compra)
    @Column
    compra_id_compra: number;

    @ForeignKey(() => Stock)
    @Column
    stock_id_sucursal: number;

    @ForeignKey(() => Stock)
    @Column
    stock_id_producto: number;

    @BelongsTo(() => Compra)
    compra: Compra;

    @BelongsTo(() => Stock,'stock_id_sucursal')
    stock: Stock;

    @BelongsTo(() => Stock, 'stock_id_producto')
    stock1: Stock;

}