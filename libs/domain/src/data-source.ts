import {DataSource} from "typeorm";
import {Task} from "./entities/task.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3309,
    username: "root",
    password: "",
    database: "database",
    entities: [Task],
    synchronize: false,
    logging: false,
});