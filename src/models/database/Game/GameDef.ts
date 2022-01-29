import { DataTypes, Model, Optional } from 'sequelize';
import { sequelizeMySQL } from '../../../database/conection';

interface IGameAttributes {
    id: number;
    name: string;
    description: string;
    image: string;
    createdAt?: Date;
}

export interface IGameInput extends Optional<IGameAttributes, 'id'> {}

export interface IGameOuput extends Required<IGameAttributes> {}

class Game extends Model<IGameAttributes, IGameInput> implements IGameAttributes {
    public id!: number;
    public name!: string;
    public description!: string;
    public image!: string;

    // timestamps!
    public readonly createdAt!: Date;
}

Game.init({
    description: {
        type: DataTypes.TEXT
    },
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    image: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: false
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
}, {
  sequelize: sequelizeMySQL
});

export default Game;
