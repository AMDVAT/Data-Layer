import { Column, Model, Table, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { Usuario } from "./Usuario";

@Table({ modelName: 'estado_usuario' })
export class EstadoUsuario extends Model<EstadoUsuario> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_estado: number;

    @Column
    nombre: string;

    @HasMany(() => Usuario)
    usuarios: Usuario[];
}