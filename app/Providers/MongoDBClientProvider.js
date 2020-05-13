const  {ServiceProvider} = require('@adonisjs/fold');

class MongoDBClientProvider extends ServiceProvider {
  register () {
    this
      .app
      .singleton('App/Services/MongoDBClient', (app) => {
        return new (require('../Services/MongoDBClient'))();
      });
  }
  boot () {}
}

module.exports = MongoDBClientProvider;
