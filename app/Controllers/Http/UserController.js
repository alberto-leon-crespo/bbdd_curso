'use strict';

const mongoClient = use('App/Services/MongoDBClient');
const mongoUserModel = require('../../Models/MongoUser');

class UserController {
  async getUsersList({request, response}) {
    let usersList = [];
    let client = await mongoClient.getClient();
    usersList = await client.collection('users').find().toArray();
    if (usersList.length > 0) {
      return response.ok(usersList);
    }
    return response.notFound(usersList);
  }
  async getUser({request, response}) {
    let userId = request.params.user_id || undefined;
    let client = await mongoClient.getClient();
    let user = await client.collection('users').find({id: parseInt(userId)}).toArray();
    if (user) {
      return response.ok(user[0]);
    }
    return response.notFound({});
  }
  async postUser({request, response}) {
    const userData = request.post();
    let user = new mongoUserModel();
    user.id = userData.id || undefined;
    user.name = userData.name || undefined;
    user.username = userData.username || undefined;
    await user.save();
    return response.created(user);
  }
  async putUser({request, response}) {
    const userData = request.post();
    const userId = request.params.user_id || undefined;
    if (!userId) {
      throw new Error("El user_id en la URL es obligatorio.");
    }
    let user = new mongoUserModel();
    user.id = userData.id || undefined;
    user.name = userData.name || undefined;
    user.username = userData.username || undefined;
    await user.save();
    return response.noContent(user);
  }
}

module.exports = UserController;
