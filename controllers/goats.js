// controllers/goats.js
const Goat = require('../models/Goat');

const index = async (req, res) => {
  try {
    const goatsData = await Goat.getAll()
    res.status(200).send({ data: goatsData })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}


module.exports = { index }