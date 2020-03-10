import { Column, Model, Table, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Usuario } from "./Usuario";

@Table
export class Compra extends Model<Compra> {

    @Column
    @PrimaryKey
    @AutoIncrement
    id_compra: number;

    @Column
    fecha: Date;

    @ForeignKey(() => Usuario)
    @Column
    USUARIO_id_usuario!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}