const express = require("express");
const routes = require('../api/routes/v1/index.js');
const errorHandler = require('../api/middlewares/error');
const cors = require('cors');

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
  

app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
    return next();
});

app.use(express.json());

app.use('/v1', routes);

// app.get('/', (req, res) => res.status(200).json({ message: "Success" }));

app.use(errorHandler);

module.exports = app;