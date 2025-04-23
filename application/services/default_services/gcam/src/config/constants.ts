import * as dotenv from 'dotenv';
dotenv.config();

export const Constants = {
    mongoUrl: process.env.MONGO_DB_URL || '',
    port: 8007,
    apiGatewayUrl: process.env.APIGATEWAY
};
