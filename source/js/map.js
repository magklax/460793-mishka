maps.ready(function () {
  "use strict";
    var myMap = new ymaps.Map('map', {
    center: [59.9387515, 30.323040],
    zoom: 16,
    behaviors: ['default', 'scrollZoom'],
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  }),

  myPlacemark = new ymaps.Placemark([59.9387515, 30.323040],

  {balloonContentBody: "<div style='font-family: @font-family;'><div style='font-weight: bold;'>Магазин Mishka</div><div>г. Санкт-Петербург, ул. Большая Конюшенная,<br> д. 19/8, офис 101</div></div>"},
  {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-pin.svg',
    iconImageSize: [66, 101],
    iconImageOffset: [-25, -80]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
});
