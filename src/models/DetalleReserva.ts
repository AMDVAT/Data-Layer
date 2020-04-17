import { Column, Model, Table, BelongsTo, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Reserva } from "./Reserva";
import { Producto } from "./Producto";
import { Sucursal } from "./Sucursal";

@Table({ modelName: 'detalle_reserva'})
export class DetalleReserva extends Model<DetalleReserva> {

    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_detalleReserva'})
    idDetalleReserva: number;

    @Column
    cantidad: number;

    @ForeignKey(() => Reserva)
    @Column({ field: 'id_reserva'})
    idReserva: number;

    @ForeignKey(() => Sucursal)
    @Column({ field: 'id_sucursal'})
    idSucursal: number;

    @ForeignKey(() => Producto)
    @Column({ field: 'id_producto'})
    idProducto: number;

    @BelongsTo(() => Reserva)
    reserva: Reserva;

    @BelongsTo(() => Sucursal)
    sucursal: Sucursal;

    @BelongsTo(() => Producto)
    producto: Producto;

}