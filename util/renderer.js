import { readFileSync } from 'fs';
import { resolve } from 'path';

function customRenderer(req, res, next) {
  res.render = (filePath, object) => {
    const content = readFileSync(resolve(filePath));
    const compile = (content, values) => {
      const fn = new Function(...Object.keys(values), `return \`${content}\``);
      return fn(...Object.values(values));
    };
    res.setHeader('content-type', 'text/html');
    res.send(compile(content, object));
  };
  next();
}
export default customRenderer;

// module.exports = function (app, views) {
//   app.engine('html', (filePath, options, callback) => {
//     fs.readFile(filePath, (err, content) => {
//       if (err) return callback(err);
// const compile = (content, values) => {
//   const fn = new Function(
//     ...Object.keys(values),
//     `return \`${content}\``
//   );
//   return fn(...Object.values(values));
// };
//       return callback(null, compile(content, options));
//     });
//   });
//   app.set('views', views);
//   app.set('view engine', 'html');
// };
