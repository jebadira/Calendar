var PATHS = {
    "production": "",
    "images": "",
    "imagesPublic": "",
    "filesPublic": "",
    "scripts": ""
};
var path = require('path');
module.exports = {
    entry: __dirname + "/src/webparts/customCalendarWebPart/flux/containers/CalendarContainer.jsx",
    output: {
        path: __dirname + "/src/webparts/customCalendarWebPart/dist/",
        //filename: "scripts/[name].bundle.js",
        filename : "scripts/c72cc6e78fbc47a8895f1b531093ffac.js",
        library : "c72cc6e78fbc47a8895f1b531093ffac",
        //library: "CustomCalendar",
        libraryTarget: "window"
    },
    resolve: {
        alias : {
            'react' : path.join(__dirname, "node_modules", 'react')
        },
        extensions: ['','.ts', '.tsx', '.js', '.jsx', '.less']
        
    },
    module: {
        rules: [
            {
                test: /\require.js$/,
                loader: "script-loader"
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loader: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 25000,
                            outputPath: PATHS.images,
                            publicPath: PATHS.imagesPublic
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        },
                    },
                ]
            },
            /*
            consider putting this in later but only when we have more files.  dont want to include too many things.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "script-loader"
            }*/

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    }

                ]
            },
            {
                test: /.*\.(less)$/i,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        modules : false
                    }
                }
                ,{
                    loader: "less-loader"
                }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /.*\.(tsx|jsx|ts|js)$/i,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["env", {
                                    "targets": {
                                        "browsers": ["last 3 versions", ">1%"]
                                    },
                                    useBuiltIns: true,
                                }
                                ],
                               // ["es2017"],
                               // ["es2016"],
                                ["es2015", {"modules" : false}],
                                ["react"],
                            ],
                            plugins: [
                                "transform-es2015-modules-commonjs",
                                "syntax-dynamic-import"
                            ]
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
    ],
    amd: {
        jQuery: true,
       // requirejs: true
    },
    resolve: {
        alias: {
            //requirejs: __dirname + "/src/webparts/webPortal/vendor/scripts/require.js",

        }
    },
    watch: true,
}