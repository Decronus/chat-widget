const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './scripts/widget.js', // Главный файл виджета
    output: {
        filename: 'widget.bundle.js', // Финальный собранный файл
        path: path.resolve(__dirname, 'dist'), // Папка для сохранения
        library: 'ChatWidget', // Имя глобальной переменной для использования в других проектах
        libraryTarget: 'umd', // Формат модуля (Universal Module Definition)
        clean: true, // Очистка папки dist перед сборкой
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader', // Загружает HTML как строку
            },
            {
                test: /\.css$/, // Загрузка CSS
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Папка для статических файлов
        },
        hot: true,
        compress: true,
        port: 9000,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'index.html', to: 'index.html' },
                { from: 'styles/widget.css', to: 'widget.css' }, // Копируем CSS в dist
            ],
        }),
    ],
    mode: 'production', // Минификация и оптимизация
};
