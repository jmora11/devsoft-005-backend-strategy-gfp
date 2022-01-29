export default {
    apiPath: process.env.API_PATH || '',
    bdHost: process.env.DB_HOST || '127.0.0.1',
    bdName: process.env.DB_NAME || 'gfp_005',
    bdPass: process.env.DB_PASS || '1234',
    bdPort: process.env.DB_PORT || 3306,
    bdUserName: process.env.DB_USER_NAME || 'root',
    port: process.env.PORT || '9018'
};
