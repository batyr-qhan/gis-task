let url = 'http://localhost:3000/data'

const fetchingData = async (address) => {
  let response = await fetch(address);

  let commits = await response.json(); // читаем ответ в формате JSON

  console.log(commits)

  return commits;

}

let map;

DG.then(() => {
  map = DG.map('map', {
    center: [51.16, 71.47],
    zoom: 11,
  });

  let newArr = fetchingData(url)

  newArr.then((item) => item.forEach(element => {
    let marker = DG.marker([element.firstCoord, element.secondCoord]).addTo(map);

    marker.bindPopup(`<p>${element.name}</p> <br> <a href="${element._id}"><p>edit</p></a> <br> <form method="POST" action="/${element._id}">
    <input type="submit" value="delete"></form>
    `);

    marker.on('click', () => {
      console.log(element._id)
    })
  }))
});