const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const Datastore = require('nedb');
const db = new Datastore({ filename: 'datafile.db', autoload: true });

db.ensureIndex({ fieldName: 'name', unique: true }, (err) => {
  if (err) console.error('Error creating unique index:', err);
});

const options = { multi: true, upsert: true };
// let tasks = [];
// let users = [];

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.get('/task', (req, res) => {
  db.find({ name: 'task' }, (err, docs) => {
    if (err) console.error(err);
    const tasks = docs.length > 0 ? docs[0].data : [];
    res.send(tasks);
  });
});

app.post('/task', (req, res) => {
  // console.log(req.body);
  // tasks = req.body;
  // res.status(201).json(tasks);
  db.update({ name: 'task' }, { name: 'task', data: req.body }, options, (err, numAffected, newDoc) => {
    if (err) console.error(err);
    console.log('Inserted:', newDoc);
    res.status(201).json(newDoc);
  });
});

app.post('/login', (req, res) => {
  db.find({ name: 'user' }, (err, docs) => {
    if (err) console.error(err);
    const users = docs.length > 0 ? docs[0].data : [];
    const user = users.find(user => user.email && user.email === req.body.email && user.password && user.password === req.body.password);
    if (user) {
      res.send(user);
    } else {
      res.status(500).send(null);
    }
  });

  // const user = users.find(user => user.email && user.email === req.body.email && user.password && user.password === req.body.password);
  // if (user) {
  //   console.log('@@@ 1');
  //   res.send(user);
  // } else {
  //   console.log('@@@ 2');
  //   res.status(500).send(null);
  // }
});

app.get('/user', (req, res) => {
  // res.send(users);
  db.find({ name: 'user' }, (err, docs) => {
    if (err) console.error(err);
    const users = docs.length > 0 ? docs[0].data : [];
    console.log(users);
    res.send(users);
  });
});

app.post('/user', (req, res) => {
  console.log(req.body);
  db.update({ name: 'user' }, { name: 'user', data: req.body }, options, (err, numAffected, newDoc) => {
    if (err) console.error(err);
    console.log('Inserted:', newDoc);
    res.status(201).json(newDoc);
  });
  // console.log(req.body);
  // users = req.body;
  // res.status(201).json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});