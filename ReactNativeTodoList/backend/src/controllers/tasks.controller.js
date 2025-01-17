import {connection} from '../db/database.js'

export const getTask = async (req, res) => {
  const connect = await connection();
  const [rows] = await connect.query('SELECT * FROM tasks');
  res.status(200).json(rows);
};

export const getTaskId = async (req, res) => {
  const connect = await connection();
  const [rows] = await connect.query('SELECT * FROM tasks WHERE id = ?', [
    req.params.id,
  ]);
  res.status(200).json(rows);
};

export const getTaskCount = async (req, res) => {
  try {
    const connect = await connection();
    const [rows] = await connect.query('SELECT COUNT(*) AS total FROM tasks');

    res.status(200).json(rows[0]['total']);
  } catch (error) {
    console.error('Error en getTaskCount:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const saveTask = async (req, res) => {
  try {
    const connect = await connection();
    const [results] = await connect.query(
      'INSERT INTO tasks (title,description) VALUES (?,?)',
      [req.body.title, req.body.description]
    );
    res.status(201).json({
      ...req.body,
      message: 'Task created successfully',
      id: results.insertId,
    });
  } catch (error) {
    console.error('Error en saveTask:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const updateTask = async (req, res) => {
  try {
    const connect = await connection();
    await connect.query(
      'UPDATE tasks SET title =?, description =? WHERE id =?',
      [req.body.title, req.body.description, req.params.id]
    );
    res.status(200).json({ message: 'Task updated successfully' });    
  } catch (error) {
    console.error('Error en updateTask:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const deleteTask = async (req, res) => {
  const connect = await connection();
  await connect.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
  res.status(200).json({ message: 'Task deleted successfully' });
};
