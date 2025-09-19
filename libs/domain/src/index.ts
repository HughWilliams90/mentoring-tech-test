import {initdb} from "./initdb";
import {seedExercises} from "./seed";

// repositories
export * from './repositories/task.repository';
export * from './repositories/exercise.repository';
export * from './repositories/exercise-type.repository';
// entities
export * from './entities/task.entity'
// types
export * from './types/domain-types'

initdb().then(() => {
    seedExercises().then(() => {
        console.log("Database init");
    })
});