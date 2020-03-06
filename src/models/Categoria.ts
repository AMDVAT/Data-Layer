import { Column, Model, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Categoria extends Model<Categoria> {

    @Column
    id_categoria: number;

    @Column
    nombre: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}