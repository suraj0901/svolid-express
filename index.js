import express, { static as staticContent } from 'express';
import App from './dist/app.js'
const app = express();
const port = 3010;

import customRenderer from './util/renderer.js';
app.use(staticContent('static'));
app.use(customRenderer);
app.get('/', (req, res) => {
  res.render('pages/index.html', { content: App()  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
