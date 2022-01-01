import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: path.join(__dirname, 'src/index.ts'),

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
};

export default config;
