module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/api_store'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/api_store'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};