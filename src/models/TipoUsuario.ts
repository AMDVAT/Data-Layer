import { Column, Model, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class TipoUsuario extends Model<TipoUsuario> {

    @Column
    id_tipoUsuario: number;

    @Column
    nombre: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}