import { sequelizeORM } from "./createConnection";
import { DataTypes, Sequelize } from "sequelize";

export const contactModel = sequelizeORM.define("contacts", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey :true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelizeORM,
    modelName: 'contacts'
});

