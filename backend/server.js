const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;

// cross origin resource sharing
// allows acces to data/backend from these servers
app.use(cors());

// built-in middleware to handle urlencoded data
// in other words, form data:
// content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/posts', require('./routes/posts'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})