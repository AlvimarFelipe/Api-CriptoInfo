import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelizes } from '../instances/mysql';


export interface NewsInstance extends Model {
  id: number;
  titulo: string;
  noticia: string;
  urlimg: string;
  tipo: string;
}

export const Noticia = sequelizes.define<NewsInstance>("Noticia", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  titulo: {
    type: DataTypes.STRING
  },
  noticia: {
    type: DataTypes.STRING
  },
  urlimg: {
    type: DataTypes.STRING
  },
  tipo: {
    type: DataTypes.STRING
  }
}
  , {
    tableName: 'news',
    timestamps: false
  });