var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const uri = "";
const client = new MongoClient(uri);

/**
 * メモを全件取得するAPI
 * @returns {Object[]} data
 * @returns {number} data.id - ID
 * @returns {string} data.title - タイトル
 * @returns {string} data.text - 内容
 */
router.get('/', async (req, res) => {
  // 全件取得する
  const database = client.db('notes');
  const notes = database.collection('notes');

  const query = { id: 1 };
  const note = await notes.findOne(query);

  res.json(note);
});

module.exports = router;
