const url = 'http://localhost:3000/data';

const fetchingData = async (address) => {
  const response = await fetch(address);
  const commits = await response.json(); // читаем ответ в формате JSON
  return commits;
};

let map;

DG.then(() => {
  map = DG.map('map', {
    center: [51.16, 71.47],
    zoom: 11,
  });

  const newArr = fetchingData(url);

  console.log(newArr);

  newArr.then((item) =>
    item.forEach((element) => {
      const marker = DG.marker([element.firstCoord, element.secondCoord]).addTo(
        map,
      );
      console.log(element);

      marker.bindPopup(
        // eslint-disable-next-line no-underscore-dangle
        `<div style='color: #FFCC33'><p>${element.name}</p></div> <br> <div><a href="${element._id}"><p style='color: white'>подробнее</p></a> </div>`,
      );

      // marker.on('click', () => {
      //   console.log(element._id);
      // });
    }),
  );
});
