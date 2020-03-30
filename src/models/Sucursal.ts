import { Column, Model, Table, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import {Stock} from "./Stock";

@Table({ modelName: 'sucursal' })
export class Sucursal extends Model<Sucursal> {

    // Columnas
    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_sucursal' })
    idSucursal: number;

    @Column
    nombre: string;

    @Column
    direccion: string;

    @Column
    numero: number;

    // Relaciones
    @HasMany(() => Stock)
    stock: Stock[];
}