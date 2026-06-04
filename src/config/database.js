import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

class Database {
  constructor() {
    if (!Database.instance) {
      this.sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          dialect: "postgres",
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
          logging: false,
          pool: {
            max: 10,
            min: 0,
            idle: 10000,
            acquire: 30000,
          },
        },
      );

      Database.instance = this;
    }

    return Database.instance;
  }

  async connect() {
    try {
      await this.sequelize.authenticate();
      console.log("✅ Database connected successfully");
    } catch (error) {
      console.error("❌ Unable to connect to database:", error.message);
      process.exit(1);
    }
  }

  getConnection() {
    return this.sequelize;
  }
}

const database = new Database();

export default database;
