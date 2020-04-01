import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { Usuario } from "./Usuario";
import { Producto } from "./Producto";

@Table({ modelName: 'busqueda' })
export class Busqueda extends Model<Busqueda> {

    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_busqueda' })
    idBusqueda: number;

    @Column
    fecha: Date;

    @ForeignKey(() => Usuario)
    @Column({ field: 'id_usuario' })
    idUsuario: number;

    @BelongsTo(() => Usuario)
    usuario: Usuario;

    @ForeignKey(() => Producto)
    @Column({ field: 'id_producto' })
    idProducto: number;

    @BelongsTo(() => Producto)
    producto: Producto;
}