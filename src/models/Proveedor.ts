import { Column, Model, Table, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { EntradaProducto } from "./EntradaProducto";

@Table({ modelName: 'proveedor' })
export class Proveedor extends Model<Proveedor> {

    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_proveedor' })
    idProveedor: number;

    @Column
    nombre: string;

    @Column
    email: string;

    @Column
    telefono: string;

    @Column
    direccion: string;

    @HasMany(() => EntradaProducto)
    entradaProducto: EntradaProducto[];
}