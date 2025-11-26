const conn = require('../config/db.config');

const fetchCallToAction = async () => {
  const rows = await conn.query("SELECT * FROM call_to_action WHERE id = 1");
  return rows[0];
};

const updateCallToAction = async (content, download_url) => {
  const result = await conn.query(
    "UPDATE call_to_action SET content = ?, download_url = ? WHERE id = 1",
    [content, download_url]
  );
  return result;
};

module.exports = {
  fetchCallToAction,
  updateCallToAction,
};