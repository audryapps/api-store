
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
    },
    pool: {
        min: 2,
        max: 10
      },
    migrations: {
        directory: '/migrations/20200120122922_create_products_table'
      },
      seeds: {
        directory: '/seeds/00_products',
    },
 DATABASE_URL: postgres://oylveusiccjmyx:6a8a0ef4527bef93134b48823e2ef27fe0d6ea5058c1189920dfc620d9aae69c@ec2-174-129-253-42.compute-1.amazonaws.com:5432/d6ee8nlebjl1iu
    }
  }

  