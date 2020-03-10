import { Column, Model, Table, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Compra } from "./Compra";
import { Stock } from "./Stock";

@Table({ modelName: 'detalle_compra'})
export class DetalleCompra extends Model<DetalleCompra> {

    @Column
    @PrimaryKey
    @AutoIncrement
    id_detalle_compra: number;

    @ForeignKey(() => Compra)
    @Column
    COMPRA_id_compra!: number;

    @ForeignKey(() => Stock)
    @Column
    STOCK_id_stock!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}