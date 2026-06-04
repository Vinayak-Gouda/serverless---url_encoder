import { DataTypes, Model } from "sequelize";
import database from "../config/database.js";

const sequelize = database.getConnection();

class Url extends Model {}

Url.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },

        longUrl: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "long_url"
        },

        shortCode: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true,
            field: "short_code"
        }
    },
    {
        sequelize,
        modelName: "Url",
        tableName: "urls",
        underscored: true,
        timestamps: true
    }
);

export default Url;