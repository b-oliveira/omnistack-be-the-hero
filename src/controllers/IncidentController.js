const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const ong_id = request.headers.authorization;
    const { title, description, value } = request.body;

    const [id] = await connection('incidents').insert({
      ong_id,
      title,
      description,
      value
    });
  
    return response.json({ id });
  }
};