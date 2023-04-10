import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
