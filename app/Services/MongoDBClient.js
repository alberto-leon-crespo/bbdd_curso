const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'nueva_bbdd';

class MongoDBClient {
  constructor() {
    this.client = undefined;
    return this;
  }
  async getClient() {
    if (this.client) {
      return this.client;
    }
    this.client = await new Promise( (resolve, reject) => {
      MongoClient.connect(url, {useUnifiedTopology: true},(err, client) => {
        if (err) {
          reject(err);
        }
        let adminDb = client.db(dbName);
        resolve(adminDb);
      });
    });
    return this.client;
  }
}

module.exports = MongoDBClient;
