const conn = require('../config/db.config');

// Get full about section
async function getAboutSection() {
  const aboutRows = await conn.query(`
    SELECT * FROM about_section LIMIT 1
  `);

  const listRows = await conn.query(`
    SELECT * FROM about_list_items
  `);

  return {
    description_left: aboutRows[0]?.description_left || "",
    description_right: aboutRows[0]?.description_right || "",
    list_items: listRows
  };
}

// Update only the two paragraphs
async function updateAboutSection(description_left, description_right) {
  await conn.query(
    `UPDATE about_section SET description_left=?, description_right=? WHERE id=1`,
    [description_left, description_right]
  );
}

// Add a new list item
async function addListItem(text) {
  await conn.query(
    `INSERT INTO about_list_items (text) VALUES (?)`,
    [text]
  );
}

// Delete a list item
async function deleteListItem(id) {
  await conn.query(
    `DELETE FROM about_list_items WHERE id=?`,
    [id]
  );
}

// Update a specific list item
async function updateListItem(id, text) {
  await conn.query(
    `UPDATE about_list_items SET text=? WHERE id=?`,
    [text, id]
  );
}

module.exports = {
  getAboutSection,
  updateAboutSection,
  addListItem,
  deleteListItem,
  updateListItem,
};
