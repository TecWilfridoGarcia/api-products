const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('../api/middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080','http://localhost:3000/', 'https://myapp.co', 'http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
      console.log("origin rs",origin)
    }
  }
}


app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.use(cors(options));
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
  console.log('Mi port' +  port);
});
