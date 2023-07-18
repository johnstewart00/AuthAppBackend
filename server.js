const express = require('express');
const cors = require('cors');
const loginHandler = require('./handlers/loginHandler');
const signupHandler = require('./handlers/signupHandler');


const app = express();
app.use(
    cors({
        origin: '*',
      })
);
app.use(express.json());

const port = 3001;

app.get('/login', async (req, res) => {
    console.log('made a GET to the login route');
    try {
      const username = req.query.username;
      const password = req.query.password;
      const result = await loginHandler( username, password );
      const toSend = {
        username: result[0].username,
        firstName: result[0].firstName,
        lastName: result[0].lastName,
        address: result[0].address,
        gender: result[0].gender
      }
      res.send(JSON.stringify(toSend));
    } catch (error) {
      res.status(500).send(error.message); // Send the error message as a string
    }
  });
  
  

app.post('/signup', async (req, res) => {
    console.log('made a POST to the signup route');
    console.log(req.body);
    try {
        await signupHandler(req.body);
        res.send('successfully added a new user');
    } catch (error) {
        res.status(500).send(error.message);
    }
  });

app.listen(process.env.PORT ||port, () => {
  console.log(`listening on port ${process.env.PORT || 3001}`);
});
