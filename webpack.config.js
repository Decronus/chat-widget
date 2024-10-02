const path = require('path');

module.exports = {
    entry: './scripts/widget.js',  // Главный файл виджета
    output: {
        filename: 'widget.bundle.js',  // Финальный собранный файл
        path: path.resolve(__dirname, 'dist'),  // Папка для сохранения
    },
    mode: 'production',  // Минификация и оптимизация
};
