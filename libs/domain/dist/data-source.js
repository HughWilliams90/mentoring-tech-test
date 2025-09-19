"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var property_entity_1 = require("./entities/property.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3309,
    username: "root",
    password: "",
    database: "database",
    entities: [property_entity_1.Property],
    synchronize: true,
    logging: false,
});
