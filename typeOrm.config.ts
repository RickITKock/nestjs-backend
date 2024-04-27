import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Report } from './src/reports/report.entity'; // '../reports/report.entity';
import { User } from './src/users/user.entity';

// Load environment variables
config({ path: '.env.development.local' });

console.log('Database Name:\t', process.env.DB_NAME);
console.log('Synchronsize:\t', process.env.DB_SYNCHRONIZE);

export default new DataSource({
  type: 'sqlite',
  database: process.env.DB_NAME,
  entities: [User, Report],
  migrations: ['migrations/**'],
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
});
