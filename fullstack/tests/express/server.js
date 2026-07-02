const express = require('express');
const app = express();
const port = 3000;

const countries = require('../../sanjith_sa_2/STS-FS-MUHAMMED-SANJITH-K/fullstack/tests/countries.json');


app.get('/', () => {
  res.send('app running. ');
});
app.get('/countries', (req, res) => {
  const { region } = req.query;
  if(!region) {
    return res.json(countries);
  }
  const filtered = contries.filter(country => country.region.toLowerCase() === region.toLowerCase());
    res.json(filtered);
});