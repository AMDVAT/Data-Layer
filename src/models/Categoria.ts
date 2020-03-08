import { Column, Model, Table, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';

@Table
export class Categoria extends Model<Categoria> {

    @Column
    id_categoria: number;

    @Column
    nombre: string;

    @ForeignKey(() => Categoria)
    @Column
    Categoria_id_categoria!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
