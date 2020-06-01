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
      //   marker.bindPopup(`<div><p>${element.name}</p></div> <br> <div><a href="${element._id}"><p>edit</p></a> <br> <form method="POST" action="/${element._id}">
      // <input type="submit" value="delete"></form></div>
      // `);

      marker.bindPopup(
        // eslint-disable-next-line no-underscore-dangle
        `<div><p>${element.name}</p></div> <br> <div><a href="${element._id}"><p>Детали</p></a> </div>`,
      );

      // marker.on('click', () => {
      //   console.log(element._id);
      // });
    }),
  );
});
