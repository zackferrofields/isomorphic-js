import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../../webpack.config.dev';

let server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true }
});

server.listen(8081, 'localhost', () => {});
