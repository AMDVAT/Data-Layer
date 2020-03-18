import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo, HasMany } from 'sequelize-typescript';
import {Categoria} from "./Categoria";
import {Reseña} from "./Reseña";
import {Stock} from "./Stock";

@Table({ modelName: 'producto' })
export class Producto extends Model<Producto> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_producto: number;

    @Column
    nombre: string;

    @Column
    descripcion: string;

    @Column
    precio: number;

    @Column
    ofertado: number;

    @Column
    precio_oferta: number;

    @ForeignKey(() => Categoria)
    @Column
    categoria_id_categoria: number;

    @BelongsTo(() => Categoria)
    categoria: Categoria;

    @HasMany(() => Reseña)
    reseña: Reseña[];

    @HasMany(() => Stock)
    stock: Stock[];
}