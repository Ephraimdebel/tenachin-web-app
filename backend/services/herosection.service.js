const conn = require('../config/db.config');

// Service to get hero section data
async function getHeroSection() {
  const sql = 'SELECT * FROM hero_section';
  const results = await conn.query(sql);
  return results;
}

// add to hero section data
async function addHeroSection(title, description_one, description_two) {
    const sql = 'INSERT INTO hero_section (title, description_one, description_two) VALUES (?, ?, ?)';
    const results = await conn.query(sql, [title, description_one, description_two]);
    return results;
}

// Service to update hero section data
async function updateHeroSection(title, description_one, description_two) {
    const sql = 'UPDATE hero_section SET title = ?, description_one = ?, description_two = ?';
    const results = await conn.query(sql, [title, description_one, description_two]);
    return results;
}

module.exports = { getHeroSection, updateHeroSection, addHeroSection };