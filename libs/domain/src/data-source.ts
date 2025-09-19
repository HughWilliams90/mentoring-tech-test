import {DataSource} from "typeorm";
import {Task} from "./entities/task.entity";
import {ExerciseType} from "./entities/exercise-type.entity";
import {Exercise} from "./entities/exercise.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3309,
    username: "root",
    password: "",
    database: "database",
    entities: [Task, Exercise, ExerciseType],
    synchronize: false,
    logging: false,
});