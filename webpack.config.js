const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'myBundle.js', 
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    before: function(src,server){
      server._watch('./src/*.html')
    },
    contentBase: path.join(__dirname,'src'),
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
       {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: "asset/resource"
      }
    ]
  }
}