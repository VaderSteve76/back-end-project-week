module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/notes.sqlite3'
    },
    useNullAsDefault: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};