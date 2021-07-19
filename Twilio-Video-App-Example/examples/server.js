const express = require('express');
const { resolve } = require('path');

const app = express();
app.use(express.static(resolve(__dirname, './virtualbackground')));//path.resolve to get the absolute path
app.use(express.static(resolve(__dirname, '../dist/build')));// all the unnessary file which want not required to get routes will be loaded via this express.static

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`App server started. Go to http://localhost:${port}`);
});
