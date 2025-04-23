import * as dotenv from 'dotenv';
dotenv.config();

export const Constants = {
    mongoUrl: process.env.MONGO_DB_URL || '',
    port: 3015,
    apiGatewayUrl: process.env.APIGATEWAY
};
