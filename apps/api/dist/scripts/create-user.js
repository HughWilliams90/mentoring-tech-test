"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
exports.main = main;
// App
const entities_1 = require("../app/entities");
const db_1 = require("../db");
exports.schema = {
    additionalProperties: false,
    properties: {},
    required: [],
    type: 'object',
};
async function main(args, services, logger) {
    await db_1.dataSource.initialize();
    try {
        const user = new entities_1.User();
        await user.save();
        logger.info(`User created: ${JSON.stringify(user, null, 2)}`);
    }
    finally {
        await db_1.dataSource.destroy();
    }
}
//# sourceMappingURL=create-user.js.map