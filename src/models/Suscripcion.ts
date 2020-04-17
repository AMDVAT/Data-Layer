import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { Usuario } from "./Usuario";
import { Producto } from "./Producto";

@Table({ modelName: 'suscripcion' })
export class Suscripcion extends Model<Suscripcion> {

    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_suscripcion' })
    idSuscripcion: number;

    @Column
    fecha: Date;

    @Column
    id_estado: number;

    @ForeignKey(() => Usuario)
    @Column({ field: 'id_usuario' })
    idUsuario!: number;

    @BelongsTo(() => Usuario)
    usuario: Usuario;

    @ForeignKey(() => Producto)
    @Column({ field: 'id_producto' })
    idProducto: number;

    @BelongsTo(() => Producto)
    producto: Producto;
}