const express = require('express');
const bodyParser = require('body-parser');

const user = require('./controllers/userController');
const validation = require('./middlewares/validateUser');

const app = express();

app.use(bodyParser.json());

app.post('/user', validation.validateName, 
validation.validateEmail, 
validation.validatePassword, 
user.createUser);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
