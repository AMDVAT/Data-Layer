import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, HasMany, BelongsTo } from 'sequelize-typescript';
import { Producto } from "./Producto";

@Table({ modelName: 'categoria'})
export class Categoria extends Model<Categoria> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_categoria: number;

    @Column
    nombre: string;

    @Column
    descripcion: string;

    @ForeignKey(() => Categoria)
    @Column
    categoria_id_categoria!: number;

    @HasMany(() => Categoria)
    categorias: Categoria[];

    @BelongsTo(() => Categoria)
    categoria: Categoria;

    @HasMany(() => Producto)
    productos: Producto[];
}
