const pool = require(`../db`);

async function getAllEnvironmentDB() {
  const client = await pool.connect();

  const queryText = `select * from environment`;
  const data = (await client.query(queryText)).rows;

  return data;
}

async function getElementByIdDB(id) {
  const client = await pool.connect();

  const sql = `select * from environment where id = $1`;
  const data = (await client.query(sql, [id])).rows;

  return data;
}

async function postCreateEnvironmentDB(label, category, priority) {
  const client = await pool.connect();
  const sql = `INSERT INTO environment (label,category,priority) VALUES ($1,$2,$3) RETURNING *`;

  const data = (await client.query(sql, [label, category, priority])).rows;

  return data;
}

async function putUpdateEnvironmentDB(id, label, category, priority) {
  const client = await pool.connect();

  const sql = `UPDATE environment SET label = $2, category = $3, priority = $4 WHERE id = $1 RETURNING *`;
  const data = (await client.query(sql, [id, label, category, priority])).rows;

  return data;
}

async function deleteEnvironmentDB(id) {
  const client = await pool.connect();
  const sql = `DELETE FROM environment WHERE id = $1 RETURNING *`;
  const data = (await client.query(sql, [id])).rows;

  return data;
}

async function patchEnvironmentDB(id, clientData) {
  const client = await pool.connect();

  const sql = `SELECT * FROM environment WHERE id = $1`;
  const data = (await client.query(sql, [id])).rows;
  const newObj = { ...data[0], ...clientData };

  const sqlNew = `UPDATE environment SET label = $1, category = $2, priority = $3 WHERE id = $4 RETURNING *`;
  const newData = (await client.query(sqlNew, [newObj.label, newObj.category, newObj.priority, id])).rows;

  return newData;
}

module.exports = {
  getAllEnvironmentDB,
  getElementByIdDB,
  postCreateEnvironmentDB,
  putUpdateEnvironmentDB,
  deleteEnvironmentDB,
  patchEnvironmentDB,
};
