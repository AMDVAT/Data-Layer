import { Column, Model, Table, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import {Stock} from "./Stock";

@Table({ modelName: 'sucursal' })
export class Sucursal extends Model<Sucursal> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_sucursal: number;

    @Column
    nombre: string;

    @Column
    direccion: string;

    @Column
    numero: number;

    @HasMany(() => Stock)
    stock: Stock[];
}