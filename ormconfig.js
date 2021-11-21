

module.exports = {
    "type": "postgres",
    "host": process.env.POSTGRES_HOST || "localhost",
    "port": process.env.POSTGRES_PORT || 5432,
    "username": process.env.POSTGRES_USERNAME || "postgres",
    "password": process.env.POSTGRES_PASSWORD || "postgres",
    "database": process.env.POSTGRES_DATABASE || "my_store",
    "synchronize": false,
    "logging": true,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [ "src/migration/**/*.ts"
    ],
    "subscribers": [ "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity", "migrationsDir": "src/migration", "subscribersDir": "src/subscriber"
    }
}


