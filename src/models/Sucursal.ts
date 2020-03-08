import { Column, Model, Table, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Sucursal extends Model<Sucursal> {

    @Column
    @PrimaryKey
    @AutoIncrement
    id_sucursal: number;

    @Column
    nombre: string;

    @Column
    direccion: string;

    @Column
    numero: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}