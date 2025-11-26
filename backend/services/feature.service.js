const conn = require('../config/db.config');

// 1. Get all feature sections + list items
async function getAllFeatureSections() {
  const sqlSections = `SELECT * FROM feature_sections ORDER BY id ASC`;
  const sqlLists = `SELECT * FROM feature_list_items ORDER BY id ASC`;

  const sections = await conn.query(sqlSections);
  const listItems = await conn.query(sqlLists);

  // Map list items into their sections
  const formatted = sections.map(section => {
    const items = listItems.filter(li => li.section_id === section.id);
    return {
      ...section,
      items
    };
  });

  return formatted;
}

// 2. Get single feature section
async function getFeatureSection(id) {
  const sql = `SELECT * FROM feature_sections WHERE id = ?`;
  const sqlList = `SELECT * FROM feature_list_items WHERE section_id = ?`;

  const section = await conn.query(sql, [id]);
  const list = await conn.query(sqlList, [id]);

  return { ...section[0], items: list };
}

// 3. Update section content (content + optional image)
async function updateFeatureSection(id, content, media_url = null,media_type="image") {
  let sql, params;

  if (media_url) {
    sql = `
      UPDATE feature_sections 
      SET content = ?, media_url = ?, media_type = ?
      WHERE id = ?
    `;
    params = [content, media_url,media_type, id];
  } else {
    sql = `
      UPDATE feature_sections 
      SET content = ?
      WHERE id = ?
    `;
    params = [content, id];
  }

  const result = await conn.query(sql, params);
  return result;
}

// 4. Add list item
async function addListItem(section_id, text) {
  const sql = `
    INSERT INTO feature_list_items (section_id, text)
    VALUES (?, ?)
  `;
  const result = await conn.query(sql, [section_id, text]);
  return result;
}

// 5. Update list item
async function updateListItem(id, text) {
  const sql = `
    UPDATE feature_list_items 
    SET text = ?
    WHERE id = ?
  `;
  const result = await conn.query(sql, [text, id]);
  return result;
}

// 6. Delete list item
async function deleteListItem(id) {
  const sql = `DELETE FROM feature_list_items WHERE id = ?`;
  const result = await conn.query(sql, [id]);
  return result;
}

module.exports = {
  getAllFeatureSections,
  getFeatureSection,
  updateFeatureSection,
  addListItem,
  updateListItem,
  deleteListItem,
};
