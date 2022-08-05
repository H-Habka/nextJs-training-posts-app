import { sequelizeORM } from "./createConnection";
import { DataTypes, Sequelize } from "sequelize";

export const postsModel = sequelizeORM.define("posts", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey :true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    excerpt: {
        type: DataTypes.STRING,
        allowNull:false
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false,
    }
},{
    sequelizeORM,
    modelName: 'posts'
});
