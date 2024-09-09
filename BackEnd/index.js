const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 9000;

const uri = 'mongodb+srv://skizzz467:bKhfofnPqNV7yG1s@cluster0.ie2xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'User';
const collectionName = 'users';

let db;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

app.use(bodyParser.json());
app.use(cors({ origin: true })); 

const generateToken = (userId) => {
  const secretKey = 'potato';
  return jwt.sign({ userId }, secretKey, { expiresIn: '30m' });
};

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    // Check for existing username before hashing
    const existingUser = await db.collection(collectionName).findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
  
    // Hash password securely using bcrypt
    const saltRounds = 10; // Adjust salt rounds as needed
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  
    // Create a new user document
    const newUser = { username, password: hashedPassword };
  
    try {
      await db.collection(collectionName).insertOne(newUser);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message:   
   'Internal server error' });
    }
  });
  

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await db.collection(collectionName).findOne({ username });
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = generateToken(user._id);
  res.json({ token });
});

app.get('/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
    res.json({ message: 'Welcome to the protected route!' });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
