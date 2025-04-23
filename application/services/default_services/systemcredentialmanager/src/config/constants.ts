import * as dotenv from 'dotenv';
dotenv.config();

export const Constants = {
    vaultUrl: process.env.VAULT_URL || '',
    vaultToken: process.env.VAULT_TOKEN || '',
    mongoUrl: process.env.MONGO_DB_URL || '',
    port: 8005,
};
