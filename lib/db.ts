import { Constants } from "./constants";
import mysql from "promise-mysql";
const constants = new Constants();

const config = constants.getConfig();

export class db {
  async getPerson(paginator?: number) {
    let SqlCommand: string;
    if (paginator) {
      SqlCommand = `
            SELECT * FROM users LIMIT ${paginator}, ${paginator + 10};
        `;
    } else {
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
      cleanResults.paginator = (paginator as number) + 10;
    }
    return cleanResults;
  }

  private getDbConnection() {
    return mysql.createConnection({
      host: config.db.hostname,
      port: config.db.port,
      user: config.db.username,
      password: config.db.password,
      database: config.db.database,
    });
  }
}
