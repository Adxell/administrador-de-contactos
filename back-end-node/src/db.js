import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: "db",
        dialect: "postgres",
    }
    );
export const sequelizee = sequelize;

