module.exports = {
    mode:"development",
    module: {
        rules:[

            {
                test: /\.(tsx|ts|jsx|js)$/i,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              },
            {
                test: /\.(jpg|jpeg|png|gif|ico)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'images',
                        name: '[name]-[sha1:hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [ 
                   
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
              },
              {
                test: /\.s[ac]ss$/i,
                use: [ "css-loader", "sass-loader"]
              },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'fonts',
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    }
}