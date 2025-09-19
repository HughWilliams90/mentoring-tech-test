import {initdb} from "./initdb";

// repositories
export * from './repositories/task.repository';
// entities
export * from './entities/task.entity'
// types
export * from './types/domain-types'

initdb().then(() => console.log("db init"));