import { Column, Model, Table, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo, HasMany } from 'sequelize-typescript';
import { Categoria } from "./Categoria";
import { Reseña } from "./Reseña";
import { Stock } from "./Stock";
import { Busqueda } from "./Busqueda";
import { Suscripcion } from "./Suscripcion";

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
    estado: number;

    @Column
    precio_oferta: number;

    @Column
    calificacion: number;

    @Column
    foto: string;

    @ForeignKey(() => Categoria)
    @Column
    id_categoria: number;

    @BelongsTo(() => Categoria)
    categoria: Categoria;

    @HasMany(() => Reseña)
    resena: Reseña[];

    @HasMany(() => Stock)
    stock: Stock[];

    @HasMany(() => Busqueda)
    busqueda: Busqueda[];

    @HasMany(() => Suscripcion)
    suscripcion: Suscripcion[];
}