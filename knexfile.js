
module.exports = {
    development: {
        client: 'pg',
        connection: {
          host : '127.0.0.1',
          user : 'postgres',
          password : '123456789',
          database : 'api_store',
          charset: 'utf8'
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  }
}
  