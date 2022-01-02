import { DataTypes, Model, Optional } from 'sequelize';
import { sequelizeMySQL } from '../../../database/conection';

interface GameAttributes {
    id: number;
    name: string;
    description: string;
    image: string;
    createdAt?: Date;
}

export interface GameInput extends Optional<GameAttributes, 'id'> {}

export interface GameOuput extends Required<GameAttributes> {}

class Game extends Model<GameAttributes, GameInput> implements GameAttributes {
    public id!: number
    public name!: string
    public description!: string
    public image!: string
    
    // timestamps!
    public readonly createdAt!: Date;
}

Game.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
  sequelize: sequelizeMySQL
})

export default Game;
