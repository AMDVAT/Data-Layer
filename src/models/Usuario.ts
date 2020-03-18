import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import {TipoUsuario} from "./TipoUsuario";

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

    @Column
    direccion: string;

    @Column
    telefono: number;

    @ForeignKey(() => TipoUsuario)
    @Column
    tipo_usuario!: number;

    @BelongsTo(() => TipoUsuario)
    tipoUsuario: TipoUsuario;
}