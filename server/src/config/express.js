const express = require('express');
const routes = require('../api/routes/v1/index.js');
const errorHandler = require('../api/middlewares/error');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
// app.use(cors());

app.use(cors({ credentials: true, origin: true }));

// app.use(
//     cors({
//       credentials: true,
//       origin: [
//         'https://ab-hiress.vercel.app',
//         ],
//     })
// );

app.use(cookieParser());

app.use(express.json());

app.use('/v1', routes);

/*app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});*/

// app.get('/', (req, res) => res.status(200).json({ message: "Success" }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '/root/client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/root/client/build/index.html'));
  });
} else {
  app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    return next();
  });
}

app.use(errorHandler);

module.exports = app;
