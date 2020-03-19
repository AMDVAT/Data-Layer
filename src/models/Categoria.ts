import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, HasMany, BelongsTo } from 'sequelize-typescript';

@Table({ modelName: 'categoria'})
export class Categoria extends Model<Categoria> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_categoria: number;

    @Column
    nombre: string;

    @ForeignKey(() => Categoria)
    @Column
    Categoria_id_categoria!: number;

    @HasMany(() => Categoria)
    categorias: Categoria[];

    @BelongsTo(() => Categoria)
    categoria: Categoria;
}
