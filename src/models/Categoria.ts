import { Column, Model, Table, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Categoria extends Model<Categoria> {

    @Column
    @PrimaryKey
    @AutoIncrement
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
