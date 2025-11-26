// services.service.js
const conn = require("../config/db.config.js");

const getAllServices = async () => {
  const rows= await conn.query("SELECT * FROM services ORDER BY id ASC");
  return rows;
};

const createService = async (data) => {
    const { title, description, icon_class, color, delay } = data;

    const result = await conn.query(
        "INSERT INTO services (title, description, icon_class, color, delay) VALUES (?, ?, ?, ?, ?)",
        [title, description, icon_class, color, delay]
    );

    return result.insertId;
};

const updateService = async (id, data) => {
  const { title, description, icon_class, color, delay } = data;

  await conn.query(
    `UPDATE services 
     SET title=?, description=?, icon_class=?, color=?, delay=?
     WHERE id=?`,
    [title, description, icon_class, color, delay, id]
  );

  return true;
};

const deleteService = async (id) => {
  await conn.query("DELETE FROM services WHERE id=?", [id]);
  return true;
};
module.exports = {
  getAllServices,
  createService,
  updateService,
  deleteService,
};