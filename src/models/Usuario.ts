import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo, HasMany } from 'sequelize-typescript';
import { TipoUsuario } from "./TipoUsuario";
import { EstadoUsuario } from "./EstadoUsuario";
import { Reseña } from "./Reseña";
import { Compra } from "./Compra";
import { Busqueda } from "./Busqueda";
import { Suscripcion } from "./Suscripcion";

@Table({ modelName: 'usuario' })
export class Usuario extends Model<Usuario> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_usuario: number;

    @Column
    nombre: string;

    @Column
    apellido: string;

    @Column
    email: string;

    @Column
    password: string;

    @ForeignKey(() => TipoUsuario)
    @Column
    tipo_usuario: number;

    @BelongsTo(() => TipoUsuario)
    tipoUsuario: TipoUsuario;

    @ForeignKey(() => EstadoUsuario)
    @Column
    estado: number;

    @BelongsTo(() => EstadoUsuario)
    estadoUsuario: EstadoUsuario;

    @HasMany(() => Reseña)
    reseña: Reseña[];

    @HasMany(() => Compra)
    compra: Compra[];

    @HasMany(() => Busqueda)
    busqueda: Busqueda[];

    @HasMany(() => Suscripcion)
    suscripcion: Suscripcion[];
}