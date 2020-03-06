import { Column, Model, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Sucursal extends Model<Sucursal> {

    @Column
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