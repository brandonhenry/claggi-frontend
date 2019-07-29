const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');
const cors = require('cors')

const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier');

const clientId = "0oa1047vvhR9PytaF357";
const oktaDomain = "https://dev-499390.okta.com";

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: `${oktaDomain}/oauth2/default`,
    clientId: clientId
});

const app = express();
const port = 3000;

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(cors());

// public route
app.get('/api/publicInfo', (req, res) => {
    res.status(200).send('You are viewing public info');
});

// protected route
app.get('/api/profile', verifyToken, (req, res) => {
    oktaJwtVerifier.verifyAccessToken(req.token)
        .then(jwt => {
            res.send('You are viewing private profile info');
        })
        .catch(err => {
            res.sendStatus(403);
        });
});

app.get('/css/bootstrap.min.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.listen(port, () => console.log(`My App listening on port ${port}!`))