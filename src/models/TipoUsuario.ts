import { Column, Model, Table, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { Usuario } from "./Usuario";

@Table({ modelName: 'tipo_usuario' })
export class TipoUsuario extends Model<TipoUsuario> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id_tipousuario: number;

    @Column
    nombre: string;

    @HasMany(() => Usuario)
    usuarios: Usuario[];
}