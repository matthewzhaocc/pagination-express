"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const constants_1 = require("./constants");
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const constants = new constants_1.Constants();
const config = constants.getConfig();
class db {
    async getPerson(paginator) {
        let SqlCommand;
        if (paginator) {
            SqlCommand = `
            SELECT * FROM users LIMIT ${paginator}, ${paginator + 10};
        `;
        }
        else {
            SqlCommand = `
            SELECT * FROM users LIMIT 10;`;
        }
        const conn = await this.getDbConnection();
        const results = await conn.query(SqlCommand);
        const cleanResults = {
            results: results,
            paginator: -1,
        };
        if (results[0].length === 10) {
            cleanResults.paginator = paginator + 10;
        }
        return cleanResults;
    }
    getDbConnection() {
        return promise_mysql_1.default.createConnection({
            host: config.db.hostname,
            port: config.db.port,
            user: config.db.username,
            password: config.db.password,
            database: config.db.database,
        });
    }
}
exports.db = db;
