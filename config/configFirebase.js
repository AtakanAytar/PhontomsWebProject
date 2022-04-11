require('dotenv').config();

module.exports = {
    "type": "service_account",
    "project_id": process.env.PROJECTID,
    "private_key_id": process.env.PROJECTKEYID,
    "private_key": process.env.PRIVATEKEY,
    "client_email": process.env.CLIENTEMAIL,
    "client_id": process.env.CLIENTID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": process.env.CLIENTX509CERTURL
}