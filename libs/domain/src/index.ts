import {initdb} from "./initdb";

export * from './domain.service';

initdb().then(() => console.log("db init"));