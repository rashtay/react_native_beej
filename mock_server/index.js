const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const https = require('https');

const PORT = 5000;
const app = express();

/**
 * Get cert from environment and store in Express.
 */
const privateKey = fs.readFileSync(`${__dirname}/sslcert/key.pem`, 'utf8');
const certificate = fs.readFileSync(`${__dirname}/sslcert/server.crt`, 'utf8');

/**
 * Prepare the credentials
 */
const credentials = {
  key: privateKey,
  cert: certificate,
};

const URL_PREFIX = '/api/v1/';

const parseRequest = (req) => {
  const path = req.path.split(URL_PREFIX)[1];
  const entity = path.split('/')[0];
  const filePath = `${__dirname}/db/${entity}/${entity}.json`;

  const bufferData = fs.readFileSync(filePath);

  return {
    data: JSON.parse(bufferData),
    entity,
    filePath,
  };
};

app.use(cors());
// Parse the form/json response
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

app.get('*', (req, res) => {
  const { data } = parseRequest(req);

  res.json({ result: data });
});

app.post('*', (req, res) => {
  const { filePath, data } = parseRequest(req);

  const body = JSON.stringify([...data, req.body]);
  fs.writeFileSync(filePath, body);

  res.json({ result: JSON.parse(body) });
});

const serverSecured = https.createServer(credentials, app);

serverSecured.listen(PORT);

serverSecured.on('listening', () =>
  console.info(`Mock server is running at https://localhost:${PORT}`),
);

serverSecured.on('error', (err) =>
  console.info('Mock server could not be started', err),
);
