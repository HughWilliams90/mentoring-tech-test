import {DataSource} from "typeorm";
import {Property} from "./entities/property.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3309,
    username: "root",
    password: "",
    database: "database",
    entities: [Property],
    synchronize: true,
    logging: false,
});