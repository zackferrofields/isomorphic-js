import express from 'express';
import React from 'react';
import Router from 'react-router';
const app = express();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

import routes from '../shared/routes';

app.get('/*', (req, res) => {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });
});

let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
