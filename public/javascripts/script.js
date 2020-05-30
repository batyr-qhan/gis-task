let map;

DG.then(() => {
  map = DG.map('map', {
    center: [51.16, 71.47],
    zoom: 11,
  });
});

// document.getElementById('creatingMarker').addEventListener('click', () => {
//   DG.marker([51.15, 71.46]).addTo(map).bindPopup('Я попап!');
// });

// function createMarker(coord) {
//   DG.marker(coord).addTo(map).bindPopup('asdasd');
// }
