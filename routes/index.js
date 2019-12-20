var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/ps4-pro-1tb-black', function(req, res, next) {
  res.render('card-item', {   
    itemImgPath : 'images/ps4.jpg',
    itemPrice : '10 199',
    itemName : 'Sony PlayStation 4 Pro 1 TB Black + DualShok 4',
    itemText : '| Геймпад Sony DualShock 4 | Процессор 8 Ядер (x86-64 AMD Jaguar) | Оперативная память 8 Gb GDDR5 | Жесткий диск: 1 Tb | Поддерживаемые носители: Blue-Ray, DVD, USB-Flash | Ethernet, Bluetooth 4.0 (LE), Wi-Fi 802.11ac | Цвет Черный'
  });
});

router.get('/iPhone11-64gb-purple', function(req, res, next) {
  res.render('card-item', { 
    itemImgPath : '/images/iPhone11.jpg',
    itemPrice : '20 377',
    itemName : 'Apple iPhone 11 Dual 64 Gb Purple',
    itemText : '| Экран 6.1" (1792x828), матрица Liquid Retina HD | Процессор A13 Bionic | Встроенная память 64 Gb | Основная камера 12 + 12 Mpx | Селфи-камера 12 Mpx | Технология Face ID | 2 x SIM карты | Защита от пыли и влаги IP68 | Размеры 150.9 x 75.7 x 8.3 мм, Вес 194 г | Purple'
  });
});

router.get('/samsung-UE55RU7472', function(req, res, next) {
  res.render('card-item', { 
    itemImgPath : '/images/samsung.jpg',
    itemPrice : '15 877',
    itemName : 'Samsung UE55RU7472 |EU|',
    itemText : '| Диагональ 55" (140 см) | 4K Ultra HD (3840x2160) | Матрица VA 10 bit (8 bit + FRC) | Частота PQI 2000 | HDR | Smart TV (на базе платформы Tizen 5.0) | Мощность звука 20 Вт | Dolby Digital Plus | Wi-Fi | Bluetooth | Поддержка AirPlay 2 | ТВ-тюнер DVB-T/T2, DVB-S/S2, DVB-C | HDMI x3, USB 2.0 x2 | Серый'
  });
});

module.exports = router;
