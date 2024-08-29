const fs = require('fs');
const pg = require('pg');
const url = require('url');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: "AVNS_eKIB_YKbqPln1C6La_Z",
    host: "pg-2827621f-idanar8192-8d2e.h.aivencloud.com",
    port: 15931,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUboF9WtnnSc1TG8g7P6dxOJH3vn0wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvZTQ0M2E2NjctY2JmYi00ZmM3LTlmYjUtOWMxMDlhNzRk
YTgxIFByb2plY3QgQ0EwHhcNMjQwODI5MDgwNjQ1WhcNMzQwODI3MDgwNjQ1WjA6
MTgwNgYDVQQDDC9lNDQzYTY2Ny1jYmZiLTRmYzctOWZiNS05YzEwOWE3NGRhODEg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANFbfiRq
j1saJWDfsUtlGb6l7VuzilrDHi52/2S+SvroORrElzipMrhYHgRHwZ9chn4OrLqs
owYW5XMGdI+NGZwUxoPeM5gkNH06ljy7vU9eY/VuVkAVr+B3wdwwPjyrsvRfisu9
Ysmaj5YVz5eoDcV82L6wjcUt0YPxaZ5ic/NYgmUW+EFjaX4K4Er8ReUFSyXRIkGL
b9x2CQOTxwy0tliYHpKuFSsFBtNoEedfBzgMoed0B/ef42Nu2IEhMX6qS8tjXbxq
4ldTA/OEhwFoLoDcvLF4KQlW4b1RTWyWUAGZZTnJVSSuh4B6Zf+rHQmpJl5gE/oD
EXP4crqBfjLPi1ZHO8qEVm0qojc5WUBfXeh5me/t/CHJfh1GP4022fb9yzmyOwNI
YWIY1u8cmuDA1vUKg32z4D0cb6/u/aZt1S4zxah/2EM3fJYf5Ty8qVaON6Mymy0K
k29YlfTDKwv6t3l6KCcL9OWcjg8iLnlSA4yx3hOI8WIlthJvlOicUPt3CQIDAQAB
oz8wPTAdBgNVHQ4EFgQUhc9Ejo+wrG1uTNozPL6S0gLWCs8wDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBADKhOQbpWKOaYaAr
fir/Zm1X8Yo6iyqAWPq1U/OYcfFI6m4ihyFkYO+VXp5GTq6jtsNG3eUPCoJMFNLQ
2vilLrO/S+xB39ivV+A+uAFnuQCZ8qrfxsfKE35mfatdcJxJI31aNF0x1M74bOPa
Nw3DNn4sPFWMMqjOggg9ofXoby59Nl68B7YB4Opm0F3jGnccey7QsAl3tWV0Rvki
BICyJygvjbasBUt007E88m/MKgVCkTQLz6ZuVxtAy2w37AWqr45il7do5QFH7mMo
u/TFUykFd+byHnZY1mWkzfykQwKAeBxPQfSGtwvT7ohUww4Io9J3J7622Er3tBGS
ULCBYV+kZKEUoqaDwajmA6US5ohvRWPJqR8pT51JyMvr+GPKQCkbXHpu3BkbUzUV
4Qjf3Mf7OAVTfVuXN+EvM8v1Ny/cK7mR3ITBnKFHYtMYB39P3db1xyE8kOUM2cR6
e08JEfOuoVhbQZJHlaYP9jNaQxV1UfniYnsh2lhFZu1nBVEGDg==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});