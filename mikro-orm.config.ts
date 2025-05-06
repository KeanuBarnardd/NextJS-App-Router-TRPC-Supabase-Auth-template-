import type { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

export const config: Options = {
  entities: ['./dist/db/entities'], // Path to compiled entities
  entitiesTs: ['./db/entities'], // Path to TypeScript entities
  dbName: 'activity_line_db', // Updated database name
  user: 'postgres', // Database username
  password: 'starscream778', // Database password
  host: 'localhost', // Database host (Docker service name)
  port: 5432, // Database port
  driver: PostgreSqlDriver, // Database type
  debug: true, // Enable debug mode for development
  migrations: {
    path: './dist/db/migrations', // Path to compiled migrations
    pathTs: './db/migrations', // Path to TypeScript migrations
  },
};

export default config;