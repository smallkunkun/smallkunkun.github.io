import 'babel-polyfill';
import koa from 'koa';
import assets from 'koa-static'
import fs from 'fs';
import path from 'path';

const app = koa();

app.use(assets(path.join(__dirname, '../../')))
app.listen(8000, () => {
  console.log('static server running: http://localhost:8000')
});