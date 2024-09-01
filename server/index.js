import express from 'express';
import betterSqlite3 from 'better-sqlite3';
import { join } from 'path';

const app = express();
const port = 8000;

const dbPath = join(process.cwd(), 'database.db');
const db = betterSqlite3(dbPath);

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use(express.json());

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )
`);
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const insert = req.db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
    const result = insert.run(name, email);
    
    res.status(201).json({ 
      message: 'User created successfully',
      userId: result.lastInsertRowid 
    });
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/users', (req, res) => {
  const users = req.db.prepare('SELECT * FROM users').all();
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});