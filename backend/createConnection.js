import { Sequelize } from "sequelize";

export const sequelizeORM = new Sequelize("nextjs", "root", "230021", {
    host: "localhost",
    dialect: "mysql",
});

export async function checkConnection(){
    try {
        await sequelizeORM.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}