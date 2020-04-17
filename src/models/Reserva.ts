import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo, HasMany } from 'sequelize-typescript';
import { Usuario } from "./Usuario";
import { DetalleReserva } from "./DetalleReserva";

@Table({ modelName: 'reserva' })
export class Reserva extends Model<Reserva> {

    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_reserva' })
    idReserva: number;

    @Column
    fecha: Date;

    @Column
    estado: number;

    @ForeignKey(() => Usuario)
    @Column({ field: 'id_usuario' })
    idUsuario: number;

    @BelongsTo(() => Usuario)
    usuario: Usuario;

    @HasMany(() => DetalleReserva)
    detalleReserva: DetalleReserva[];
}