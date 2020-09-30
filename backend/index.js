const express = require("express");
const {json} = require('body-parser');
const cors = require('cors');
const {salvarSeguro, listarSeguros} = require('./seguro-service');
const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
    publicKey: 'BHa3WrNdFbimLPDo2_LDfacjwfTc20FK4dwzdbOIe5vW2cBGaDqRtIjpFHhvP9suA2yMW_cPqF-cBn0f4GWwxjI',
    privateKey: 'tNiI5iBRWTp2yS4jr37-CfA3TyVc9szuXHlQq8XcVkA'
}

webpush.setVapidDetails(
    'test@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const app = express();
app.use(json());
app.use(cors({origin: true, credentials: true}));

app.route('/api/seguros').post(salvarSeguro);
app.route('/api/seguros').get(listarSeguros);

const PORT = 9000;
const HOST = 'localhost';

const httpServer = app.listen(PORT, HOST, () => {
    console.log("HTTP Server running at http://" + HOST + ":" + PORT);
});