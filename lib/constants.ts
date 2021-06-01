export class Constants {
  getConfig(): ApplicationConfig {
    return require("../config.json") as ApplicationConfig;
  }
}

export type ApplicationConfig = {
  db: {
    hostname: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
};
