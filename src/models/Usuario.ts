import { Column, Model, Table, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';
import {TipoUsuario} from "./TipoUsuario";

@Table
export class Usuario extends Model<Usuario> {

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

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}