import * as dotenv from 'dotenv';
dotenv.config();

export const Constants = {
    gcamUrl: process.env.GCAMURL || '',
    mongoUrl: process.env.MONGO_DB_URL || '',
    port: 8001,
    apiGatewayUrl: process.env.APIGATEWAY
};
