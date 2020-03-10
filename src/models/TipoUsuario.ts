import { Column, Model, Table, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ modelName: 'tipo_usuario'})
export class TipoUsuario extends Model<TipoUsuario> {

    @Column
    @PrimaryKey
    @AutoIncrement
    id_tipoUsuario: number;

    @Column
    nombre: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}