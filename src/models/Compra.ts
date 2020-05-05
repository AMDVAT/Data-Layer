import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo, HasMany } from 'sequelize-typescript';
import { Usuario } from "./Usuario";
import { DetalleCompra } from "./DetalleCompra";

@Table({ modelName: 'compra'})
export class Compra extends Model<Compra> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_compra: number;

    @Column
    fecha: Date;

    @ForeignKey(() => Usuario)
    @Column
    id_usuario: number;

    @BelongsTo(() => Usuario)
    usuario: Usuario;

    @HasMany(() => DetalleCompra)
    detalleCompra: DetalleCompra[];
}