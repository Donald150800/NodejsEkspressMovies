const mysql = require('mysql');
// buat konfigurasi koneksi
const Koneksi = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'dbmovie',
multipleStatments: true
});
// koneksi database
Koneksi.connect((err) => {
    if (err) throw err;
    console.log ('MySQL Connected...');
});
module.exports = Koneksi;