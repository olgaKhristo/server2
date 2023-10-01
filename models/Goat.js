//models/db -> controllers -> routers -> app -> 3000
//models/Goat.js
const db = require('../database/connect')

class Goat {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.age = data.age
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM goats");
    if (response.rows.length === 0) {
      throw new Error("No goats available.")
    }
    return response.rows.map(g => new Goat(g));
  }
}

module.exports = Goat